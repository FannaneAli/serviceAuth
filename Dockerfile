# syntax=docker/dockerfile:1
FROM maven:3.9.9-eclipse-temurin-17 AS builder

WORKDIR /build

# Pre-fetch dependencies using only pom files to leverage Docker cache
COPY pom.xml .
COPY account-service/pom.xml account-service/
COPY auth-service/pom.xml auth-service/
COPY api-gateway/pom.xml api-gateway/
COPY eureka-server/pom.xml eureka-server/
COPY soutenances-service/pom.xml soutenances-service/
RUN mvn -q -pl :micro-platform -am dependency:go-offline

# Copy full sources and build
COPY . .
RUN mvn -q -DskipTests package

FROM eclipse-temurin:17-jre
ARG APP_NAME
ENV SERVER_PORT=8080
WORKDIR /app
COPY --from=builder /build/${APP_NAME}/target/*.jar app.jar
EXPOSE ${SERVER_PORT}
ENTRYPOINT ["sh","-c","java -jar app.jar --server.port=${SERVER_PORT}"]

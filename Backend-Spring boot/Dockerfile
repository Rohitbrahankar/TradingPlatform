# ---- STAGE 1: Build ----
FROM maven:3.9.4-eclipse-temurin-17 AS build

WORKDIR /app

COPY pom.xml .
RUN mvn dependency:go-offline

COPY . .
RUN mvn clean package -DskipTests

# ---- STAGE 2: Runtime ----
FROM eclipse-temurin:17-jdk-slim

WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

ENV FRONTEND_URL=http://localhost:3000

ENTRYPOINT ["java", "-jar", "app.jar"]


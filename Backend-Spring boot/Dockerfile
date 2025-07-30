## ---- STAGE 1: Build ----
#FROM maven:3.9.4-eclipse-temurin-17 AS build
#
#WORKDIR /app
#
#COPY pom.xml .
#RUN mvn dependency:go-offline
#
#COPY . .
#RUN mvn clean package -DskipTests
#
## ---- STAGE 2: Runtime ----
#FROM eclipse-temurin:17-jdk-slim
#
#WORKDIR /app
#
#COPY --from=build /app/target/*.jar app.jar
#
#EXPOSE 8080
#
#ENV FRONTEND_URL=http://localhost:3000
#
#ENTRYPOINT ["java", "-jar", "app.jar"]
#




# ---- STAGE 1: Build ----
FROM maven:3.9.4-openjdk-17 AS build

# Set working directory inside the container
WORKDIR /app

# Copy only pom.xml and download dependencies (to use Docker cache effectively)
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy the rest of the project and build
COPY src  ./src
RUN mvn clean package -DskipTests

# ---- STAGE 2: Runtime ----
FROM openjdk:22-jdk-slim AS runtime

WORKDIR /app

# Copy the JAR built in the first stage
COPY --from=build /app/target/treading-plateform-0.0.1-SNAPSHOT.jar .

# Optional: Reduce size further by cleaning up (if anything copied or temp dirs exist)

# Set the port your app will run on
EXPOSE 8080

# Environment variable (used by your Spring app if referenced)
ENV FRONTEND_URL=http://localhost:3000

# Run the JAR
ENTRYPOINT ["java", "-jar", "treading-plateform-0.0.1-SNAPSHOT.jar"]

##Use an official Maven image to build the  spring boot app
#
#FROM maven:3.8.4-openjdk-17 As build
#
#
##set the working directory
#WORKDIR /app
#
##copy the pom.xml and install dependendencies
#COPY pom.xml .
#RUN mvn dependency:go-offline
#
##copy the source code and build the application
#COPY src ./src
#RUN mvm clear package -DskipTests
#
##Use an official openjdk image to run the application
#FROM openjdk:17-jdk-slim
#
##set the working directory
#WORKDIR /app
#
##copy the built jar file from the build stage
#COPY --from=build /app/target/demo2-0.0.1-SNAPSHOT.jar.
#
##Expose port 8080
#EXPOSE 8080
#
##specify the command to run the application
#ENTRYPOINT ["java","-jar","/app/notes-0.0.1-SNAPSHOT.jar"]





# Use an official Maven image to build the Spring Boot app
FROM maven:3.8.4-openjdk-17 AS build

# Set the working directory
WORKDIR /app

# Copy the pom.xml and install dependencies
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy the source code and build the application
COPY src ./src
RUN mvn clean package -DskipTests

# Use an official OpenJDK image to run the application
FROM openjdk:17-jdk-slim

# Set the working directory
WORKDIR /app

# Copy the built jar file from the build stage
COPY --from=build /Treading_platfrom-main/target/demo2-0.0.1-SNAPSHOT.jar .

# Expose port 8080
EXPOSE 8080

# Specify the command to run the application
ENTRYPOINT ["java", "-jar", "/Treading_platfrom-main/target/demo2-0.0.1-SNAPSHOT.jar"]


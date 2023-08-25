
# Use an official Node.js runtime as the base image
FROM openjdk:8-jdk-alpine
# Set the working directory inside the container
WORKDIR /app
# Expose the port that the application will listen on

ENV server.port=8086
ENV spring.datasource.url=jdbc:mysql://mysql:3306/E-BANK?createDatabaseIfNotExist=true&useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true
ENV spring.datasource.username=root
ENV spring.datasource.password=root
ENV spring.jpa.show-sql=true
ENV spring.jpa.hibernate.ddl-auto=create
ENV spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MariaDBDialect

COPY /target/ebanking-backend-1.0-SNAPSHOT.jar app.jar

# Copy the entire project to the container




# Define the command to run the application

CMD ["java","-jar","app.jar"]


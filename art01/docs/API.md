# API Documentation

This document provides an overview of the art01 API endpoints.

## Artists

*   **`POST /api/artist`**: Create a new artist.
    *   **Request Body:**
        ```json
        {
          "name": "string",
          "handle": "string",
          "bio": "string" (optional),
          "contactPref": "string" (optional)
        }
        ```
    *   **Response:** The created artist object.

*   **`GET /api/artists`**: Get all artists.
    *   **Response:** An array of artist objects.

## Interactions

*   **`POST /api/interaction`**: Create a new interaction.
    *   **Request Body:**
        ```json
        {
          "artistId": "string",
          "volunteerId": "string",
          "type": "string",
          "quantity": "number",
          "money": "number",
          "notes": "string" (optional),
          "timestamp": "string" (ISO 8601),
          "location": "string" (optional)
        }
        ```
    *   **Response:** The created interaction object.

## Assessments

*   **`POST /api/assessment`**: Create a new assessment.
    *   **Request Body:**
        ```json
        {
          "artistId": "string",
          "type": "string",
          "answers": "object",
          "score": "number"
        }
        ```
    *   **Response:** The created assessment object.

## Allocations

*   **`POST /api/allocation`**: Create a new allocation.
    *   **Request Body:**
        ```json
        {
          "volunteerId": "string",
          "artistId": "string",
          "timeMinutes": "number",
          "moneyCents": "number",
          "purpose": "string"
        }
        ```
    *   **Response:** The created allocation object.

import { createServer } from "http";
import next from "next";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const port = process.env.PORT || 7008; // Set the port from environment variables or default to 7008
const dev = process.env.NODE_ENV !== "production"; // Check if we are in development mode
const app = next({ dev });
const handle = app.getRequestHandler(); // Get the default request handler for Next.js

app
    .prepare()
    .then(() => {
        // Local type aliases for clarity
        type IncomingReq = import("http").IncomingMessage;
        type ServerRes = import("http").ServerResponse;
        type ListenCallback = (err?: unknown) => void;

        createServer((req: IncomingReq, res: ServerRes) => {
            handle(req, res); // Handle the requests
        }).listen(port, ((err?: unknown) => {
            if (err) throw err;
            console.log(`> Ready on http://localhost:${port}`); // Log that the server is ready
        }) as ListenCallback);
    })
    .catch((err) => {
        console.error("Error starting server:", err); // Log any errors
        process.exit(1); // Exit the process if there's an error
    });

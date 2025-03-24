---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: single
author_profile: true
---

I am a **software engineer** based in San Francisco. I recently graduated with a degree 
in Computer Science from the University of California, Santa Cruz. I’m passionate 
about building scalable systems and exploring systems programming

## EDUCATION
University of California, Santa Cruz - **Computer Science**

## Projects
### Custom 16-bit Game Emulator
**Tech:** C++, System Programming
- Designed and implemented a cycle-accurate 16-bit CPU emulator with memory mapping and instruction decoding.
- Built a virtual memory system simulating a game console with mapped RAM and I/O address space.
- Integrated an instruction jump table for efficient opcode/function dispatch using C++ function pointers.
- Parsed binary game files and accurately loaded data and instructions into emulated memory.

### RoadBuddy - Ride-Sharing Application
**Tech:** Python, Flask, RESTful APIs, Firebase (Firestore, Auth)
- Designed and implemented the backend infrastructure using Flask and Firebase, ensuring scalability and modular service class design(e.g., RideManager, ChatMessagesManager, NotificationManager)
- Built a comprehensive RESTful API layer supporting core operations: ride posting, seat booking, chat messaging, and notifications.
- Develop real-time chat functionality using Firestore snapshot listeners, with participant validation, chat room creation, and last message tracking.
- Utilized batch reads and writes to optimize performance during large-scale database operations (e.g., ride deletions, multi-user notifications).

### Replicated Key-Value Store Application
**Tech:** Python, Flask, RESTful APIs
- Led 3 team members and derived the technical design for implementing the system.
- Designed and implemented RESTful APIs for managing replicas and performing key-value operations.
- Ensured causal consistency by enforcing the safety property where participants agreed on the relative order of causally related events by following the happens-before relation.
- Achieved eventual consistency by implementing robust broadcasting protocols, ensuring replicas eventually agreed on the state of the storage. The delivery of a message can be delayed if the conditions of causally-ordered multicast are not met.

### Multi-Threaded HTTP Server
**Tech:** C, Parallel and Concurrent, HTTP
- Developed thread-safe reader-writer locks to ensure mutual exclusion for write operations to avoid data-conflicts while allowing multiple threads to read the same file concurrently.
- Built a custom HTTP request parser to handle and validate client requests, ensuring proper decoding of HTTP methods, header, and payloads.
- Improve the server throughput by processing multiple clients requests simultaneously by assigning a thread to each task.

## SKILLS & EXPERTISE
- Python
- C/C+
- SQL
- Flask
- RESTful APIs
- Parallel and Concurrent Programming

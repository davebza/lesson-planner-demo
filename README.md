# Lesson Planner Demo

A public, sanitized curriculum and lesson-planning application demonstrating how long-range course structure can connect to individual lessons and presentation.

## What it demonstrates
- Curriculum → unit → lesson data modelling
- Long-range planning workflows
- Structured learning objectives and activities
- Google Apps Script web-app patterns
- A shared data contract with the Lesson Presenter

## Architecture
```
                         ┌→ Lesson Planner (write / organise)
Synthetic Google Sheet ──┤
                         └→ Lesson Presenter (read / present)
```

The initial public version uses synthetic fallback data. It is deliberately structured so the repository adapter can later point to a Google Sheet owned by a personal account.

## Privacy
No real school calendars, student records, Drive IDs, credentials, licensed materials or production data are included.

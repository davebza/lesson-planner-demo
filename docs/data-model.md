# Data model

This repository uses the same intended Google Sheets schema as `lesson-presenter-demo`:

- Courses
- Units
- Lessons
- Activities
- Resources
- Classes
- Participants (fictional public-demo data only)

The Planner is the organisational/write-facing application; Presenter is the classroom/read-facing application. Both should depend on a repository/data-service boundary rather than spreadsheet coordinates in UI code.

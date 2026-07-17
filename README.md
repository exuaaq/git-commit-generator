# Git Activity Generator

A Node.js utility for generating timestamped Git commits across a configurable date range. The project simulates realistic development activity patterns using productivity waves, weekend behavior, holiday exclusions, randomized commit times, and dynamic commit messages.

> **Note:** This tool is intended for learning, testing, automation experiments, and Git workflow demonstrations.

## Table of Contents

* [Overview](#overview)
* [Features](#features)
* [Technology Stack](#technology-stack)
* [Installation](#installation)
* [Usage](#usage)
* [How It Works](#how-it-works)
* [Project Structure](#project-structure)
* [Configuration](#configuration)
* [Learning Outcomes](#learning-outcomes)
* [License](#license)

---

## Overview

Git Activity Generator is a lightweight automation tool built with Node.js that creates Git commits over a specified period of time.

The generator incorporates randomized behavior patterns to simulate non-uniform development activity, including:

* Variable daily commit volume
* Productivity cycles
* Weekend activity probabilities
* Holiday exclusions
* Randomized commit timestamps
* Dynamic commit messages

The project demonstrates automation techniques, date manipulation, Git integration, and data generation using JavaScript.

---

## Features

* Generate commits between configurable start and end dates
* Configurable daily commit limits
* Holiday exclusion support
* Productivity wave simulation using mathematical functions
* Weekend activity probability settings
* Randomized commit timestamps
* Dynamic commit message generation
* Detailed terminal logging
* Automatic Git push support
* Lightweight and easy to customize

---

## Technology Stack

| Technology | Purpose                     |
| ---------- | --------------------------- |
| Node.js    | Runtime environment         |
| JavaScript | Core application logic      |
| simple-git | Git automation              |
| Moment.js  | Date manipulation           |
| jsonfile   | Data persistence            |
| Git        | Version control integration |

---

## Installation

### Clone the Repository

```bash
git clone <repository-url>
cd git-activity-generator
```

### Install Dependencies

```bash
npm install
```

Or manually install the required packages:

```bash
npm install moment simple-git random jsonfile
```

---

## Usage

Run the generator:

```bash
node index.js
```

The application will generate commits based on the configured parameters and optionally push them to the configured remote repository.

---

## How It Works

### Date Range Configuration

Define the period during which commits should be generated.

```javascript
const startDate = new Date("2025-01-02");
const endDate = new Date("2025-12-03");
```

---

### Productivity Waves

The generator uses a sinusoidal function to simulate natural fluctuations in development activity.

```javascript
Math.sin(dayIndex / 5)
```

This produces periods of higher and lower activity instead of a constant commit rate.

---

### Weekend Behavior

Weekend commits are generated according to a configurable probability model.

Example:

* Weekdays: normal activity
* Weekends: reduced activity frequency

---

### Holiday Exclusions

Specific dates can be excluded from commit generation.

Benefits:

* More realistic activity patterns
* Easier testing of scheduling logic
* Customizable calendar support

---

### Randomized Commit Times

Commit timestamps are distributed throughout the day.

Default time window:

```text
10:00 – 20:00
```

This avoids artificial-looking commit clustering.

---

### Commit Messages

Messages are selected from a predefined collection of commit descriptions.

Example output:

```text
update: minor improvements
fix: resolve validation issue
refactor: simplify logic
docs: update documentation
```

---

### Terminal Output

Generated commits are displayed in the console.

Example:

```text
[2025-03-12 14:33:12] Commit: update: minor improvements
```

---

### Git Integration

The generator automatically creates commits and can push changes to a configured remote repository once processing is complete.

---

## Configuration

Example configuration options:

| Setting             | Description                    |
| ------------------- | ------------------------------ |
| Start Date          | Beginning of generation period |
| End Date            | End of generation period       |
| Daily Commit Limit  | Maximum commits per day        |
| Weekend Probability | Chance of weekend activity     |
| Holidays            | Excluded dates                 |
| Time Window         | Allowed commit hours           |

---

## Project Structure

```text
git-activity-generator/
│
├── index.js
├── data.json
├── package.json
├── package-lock.json
└── README.md
```

### File Overview

| File              | Purpose                 |
| ----------------- | ----------------------- |
| index.js          | Main generator logic    |
| data.json         | Generated activity data |
| package.json      | Project configuration   |
| package-lock.json | Dependency lock file    |
| README.md         | Project documentation   |

---

## Learning Outcomes

This project demonstrates practical experience with:

* Node.js Development
* JavaScript Automation
* Git Integration
* Date and Time Manipulation
* Randomized Data Generation
* Command-Line Applications
* Software Simulation Techniques
* File System Operations
* Package Management with npm

---

## License

This project was developed for educational and experimental purposes and is intended to demonstrate Git automation and scripting techniques.

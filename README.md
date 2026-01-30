# -Playwright-project-repository
Singlish to Sinhala transliteration

# IT3040 – Assignment 1  
## Automated Testing of Singlish to Sinhala Transliteration System using Playwright

## Student Details
- Registration Number: <IT23578746>
- Module: IT3040 – IT Project Management

## Assignment Overview
This repository is submitted as part of Assignment 1 for the module IT3040 – IT Project Management.
The objective of this assignment is to design, document, and automate test cases for a real-world
language transliteration system using Playwright.

## System Under Test
- Selected Option: Option 1 – Singlish to Sinhala Transliteration
- Application URL: https://www.swifttranslator.com/

The system performs real-time conversion of Singlish text into Sinhala without requiring a
convert button.


## Scope of Testing

### Included
- Functional accuracy testing of Singlish to Sinhala conversion
- Robustness testing using incorrect, mixed, or unusual inputs
- UI-related functional testing for real-time output updates
- Automation of all test cases using Playwright

### Excluded
- Backend API testing
- Performance testing
- Security testing


## Test Case Coverage
Automated tests are derived from the Excel test cases prepared using the template provided in
Appendix 2 of the assignment specification.

Coverage includes:
- Simple, compound, and complex sentences
- Interrogative and imperative sentence forms
- Present, past, and future tense usage
- Positive and negative sentence structures
- Daily conversational language usage
- Greetings and request expressions
- Polite and informal phrasing
- Multi-word expressions and repeated words
- Singular and plural usage
- Mixed Singlish and English inputs
- English brand names and technical terms
- Numbers, dates, time, and currency formats
- Punctuation and spacing variations
- Multi-line and paragraph-style inputs
- Slang and ambiguous Singlish inputs
- UI behavior related to real-time Sinhala output updates

## Test Case Design Summary
- 24 Positive Functional Test Cases
- 10 Negative Functional Test Cases
- 1 UI-related Test Case
- Test case ID formats:
  - Pos_Fun_xxxx – Positive Functional
  - Neg_Fun_xxxx – Negative Functional
  - Pos_UI_xxxx – Positive UI
  - Neg_UI_xxxx – Negative UI

## Automation Tool and Technologies
- Node.js
- Playwright
- JavaScript

## Prerequisites
- Node.js (version 16 or above)

Download Node.js from:  
https://nodejs.org/

## Project Setup Instructions
  ## Clone the repository:

    git clone <https://github.com/GKHJanithri/-Playwright-project-repository>

  ## Navigate to the project directory:

    cd <Playwrigth_Project>

  ## Install dependencies:

    npm install

  ## How to Run the Tests

    ## Execute all Playwright tests using:

      npx playwright test

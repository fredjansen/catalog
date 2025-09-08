# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a software engineering research project that creates an automated catalog of gray literature sites in the field of software engineering. The project analyzes and categorizes online platforms where software practitioners share technical information, including forums, communities, Q&A sites, and blogs.

The catalog is generated automatically using Claude Code and processes research data from PDF files containing:
- Site structure definitions and feature taxonomy
- List of 42+ software engineering community sites (Stack Overflow, Reddit, GitHub, dev.to, etc.)
- Detailed feature analysis framework with 5 main categories
- Evaluation questionnaires for systematic site comparison

## Project Structure

The project contains research documentation in PDF format:
- `files/1-SiteStructure.pdf` - Main project structure and overview
- `files/2-SiteList.pdf` - Complete list of analyzed sites
- `files/3-BackgroundFeatures.pdf` - Feature taxonomy and definitions
- `files/4-QuestionsFeatures.pdf` - Evaluation questionnaire framework

## Feature Categories

The research framework analyzes sites across 5 main categories:

1. **Basic Features**: Associated platforms, creation dates, organization methods, registration, search engines, audience types, website types, software engineering subareas
2. **Connection and Data Features**: APIs, repository downloads, dashboards, mobile apps
3. **Statistical Features**: Daily audience, registered users, rating systems, answer rates, interactions, citations
4. **On Board Features**: Moderation types, monetization, registration requirements, user rankings, allowed actions, repository metadata
5. **Discussion Features**: Topic types, experience levels, discussion tone, answer quality, user profiles, programming languages, frameworks

## Target Implementation

The catalog should provide:
- Interactive site comparison with feature-based filtering
- Export functionality (HTML, Python, JSON schema, CSV)
- Data visualization of site characteristics
- Research background integration
- Button-based navigation for feature exploration

## Data Processing Notes

- All feature values have predefined expected responses for consistency
- Multiple values are allowed for most features
- "None" is used when no alternatives apply
- Sites are evaluated systematically using the questionnaire framework in `4-QuestionsFeatures.pdf`
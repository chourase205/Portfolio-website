#!/usr/bin/env bash
# Exit on error
set -o errexit

PYTHON_CMD="python3"
if ! command -v python3 &> /dev/null; then
    PYTHON_CMD="python"
fi

# Install dependencies
pip install -r requirements.txt

# Collect static files for WhiteNoise
$PYTHON_CMD manage.py collectstatic --no-input

# Apply database migrations
$PYTHON_CMD manage.py migrate

# Populate database with portfolio data
$PYTHON_CMD seed_db.py

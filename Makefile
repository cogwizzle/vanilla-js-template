PORT ?= 8080

.PHONY: run
run:
	@echo "Starting server on http://localhost:$(PORT)"
	@echo "Press Ctrl+C to stop the server"
	@echo "----------------------------------------"
	@php -S localhost:$(PORT) -t public

.PHONY: test
test:
	@echo "No test command."

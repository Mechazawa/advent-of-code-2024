# Define variables
CC = gcc
PREPARE_SCRIPT = prepare.sh
INPUT_FILE = input.txt
GENERATED_HEADER = input.h
PART1_SRC = part1.c
PART1_OUT = part1.out

all: $(PART1_OUT)

$(GENERATED_HEADER): $(INPUT_FILE) $(PREPARE_SCRIPT)
	rm -f $(GENERATED_HEADER)
	bash $(PREPARE_SCRIPT) $(INPUT_FILE) > $(GENERATED_HEADER)

$(PART1_OUT): $(PART1_SRC) $(GENERATED_HEADER)
	$(CC) -O3 -o $@ $(PART1_SRC)

clean:
	rm -f $(GENERATED_HEADER) $(PART1_OUT)

run: $(PART1_OUT) $(PART2_OUT)
	./$(PART1_OUT)

.PHONY: all clean run

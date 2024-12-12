use std::fmt::Display;
use std::io::{stdin, Read};

const MAPPED_CHAR: char = '.';

#[derive(Clone, Copy, Debug, Eq, Hash, PartialEq, PartialOrd)]
struct Point(usize, usize);

impl Point {
    pub fn neighbours(&self) -> Vec<Point> {
        vec![
            Point(self.0.wrapping_sub(1), self.1),   // Up
            Point(self.0, self.1.wrapping_sub(1)),   // Left
            Point(self.0.saturating_add(1), self.1), // Down
            Point(self.0, self.1.saturating_add(1)), // Right
        ]
    }
}

#[derive(Debug)]
struct Grid {
    rows: usize,
    cols: usize,
    data: Vec<char>,
}

impl Grid {
    pub fn from_str(data: &str) -> Self {
        let rows = data.lines().count();
        let cols = data.lines().next().map_or(0, |line| line.chars().count());
        let data = data.lines().flat_map(|line| line.chars()).collect();

        Self { rows, cols, data }
    }

    pub fn get(&self, point: Point) -> Option<char> {
        if point.0 < self.rows && point.1 < self.cols {
            Some(self.data[point.0 * self.cols + point.1])
        } else {
            None
        }
    }

    pub fn set(&mut self, point: Point, value: char) {
        if point.0 < self.rows && point.1 < self.cols {
            self.data[point.0 * self.cols + point.1] = value;
        }
    }

    pub fn find_unmapped(&self) -> Option<Point> {
        for row in 0..self.rows {
            for col in 0..self.cols {
                let point = Point(row, col);

                if self.get(point).unwrap() != MAPPED_CHAR {
                    return Some(point);
                }
            }
        }

        None
    }

    pub fn get_region(&self, start: Point) -> Option<Region> {
        let mut region = Region::new(self.get(start)?);
        let mut stack = vec![start];

        while let Some(point) = stack.pop() {
            if let Some(c) = self.get(point) {
                if c == region.name && !region.points.contains(&point) {
                    stack.extend(point.neighbours());

                    region.points.push(point);
                }
            }
        }

        Some(region)
    }

    pub fn take_region(&mut self, start: Point) -> Option<Region> {
        let region = self.get_region(start)?;

        region
            .points
            .iter()
            .for_each(|point| self.set(*point, MAPPED_CHAR));

        Some(region)
    }
}

impl Display for Grid {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        for row in 0..self.rows {
            for col in 0..self.cols {
                write!(f, "{}", self.get(Point(row, col)).unwrap())?;
            }
            writeln!(f)?;
        }

        Ok(())
    }
}

#[derive(Debug)]
struct Region {
    name: char,
    points: Vec<Point>,
}

impl Region {
    pub fn new(name: char) -> Self {
        Self {
            name,
            points: Vec::new(),
        }
    }

    pub fn area(&self) -> usize {
        self.points.len()
    }

    pub fn perimeter(&self) -> usize {
        let mut perimeter = 0;

        for point in &self.points {
            let mut neighbours = 0;

            for neighbour in point.neighbours() {
                if self.points.contains(&neighbour) {
                    neighbours += 1;
                }
            }

            perimeter += 4 - neighbours;
        }

        perimeter
    }

    fn bottom_right(&self) -> Point {
        let max_row = self.points.iter().map(|p| p.0).max().unwrap();
        let max_col = self.points.iter().map(|p| p.1).max().unwrap();

        Point(max_row, max_col)
    }

    pub fn sides(&self) -> usize {
        let mut total_sides = 0;
        let bottom_right = self.bottom_right();

        const LEFT: usize = 1;
        const RIGHT: usize = 3;

        for direction in 0..4 {
            let mut visited = vec![];

            for point in &self.points {
                if visited.contains(point) || self.points.contains(&point.neighbours()[direction]) {
                    continue;
                }

                total_sides += 1;
                visited.push(*point);

                for side in &[LEFT, RIGHT] {
                    let mut current = point.clone();

                    while current <= bottom_right
                        && self.points.contains(&current)
                        && !self.points.contains(&current.neighbours()[direction])
                    {
                        visited.push(current);
                        current = current.neighbours()[(direction + side) % 4];
                    }
                }
            }
        }

        total_sides
    }
}

fn main() {
    let mut input = String::new();
    stdin().lock().read_to_string(&mut input).unwrap();

    let mut grid = Grid::from_str(&input);
    let mut part1 = 0;
    let mut part2 = 0;

    while let Some(point) = grid.find_unmapped() {
        let region = grid.take_region(point).unwrap();

        part1 += region.area() * region.perimeter();
        part2 += region.area() * region.sides();
    }

    println!("Part 1: {}", part1);
    println!("Part 2: {}", part2);
}

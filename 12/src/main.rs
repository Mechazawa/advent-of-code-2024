use std::fmt::Display;

const MAPPED_CHAR: char = '.';

#[derive(Clone, Copy, Debug, Eq, Hash, PartialEq)]
struct Point(usize, usize);

impl Point {
    pub fn neighbours(&self) -> Vec<Point> {
        let mut neighbours = Vec::new();

        neighbours.push(Point(self.0 + 1, self.1));
        neighbours.push(Point(self.0, self.1 + 1));

        if self.0 > 0 {
            neighbours.push(Point(self.0 - 1, self.1));
        }

        if self.1 > 0 {
            neighbours.push(Point(self.0, self.1 - 1));
        }

        neighbours
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

        region.points.iter()
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
        Self { name, points: Vec::new() }
    }

    pub fn price(&self) -> usize {
        self.area() * self.perimeter()
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
}


fn main() {
    let mut grid = Grid::from_str(include_str!("../input.txt"));
    let mut output = 0;

    while let Some(point) = grid.find_unmapped() {
        let region = grid.take_region(point).unwrap();

        println!("{} -> {} * {} = {}", region.name, region.area(), region.perimeter(), region.price());

        output += region.price();
    }

    println!("Output: {}", output);
}

class Student2 {
  constructor(
    public fullName: string,
    public address: string,
    public phoneNumber: string
  ) {}
}

class Course {
  students: Student2[] = [];

  constructor(
    public courseName: string,
    public startDate: Date,
    public duration: string
  ) {}

  enrollStudent(student: Student2): void {
    if (this.students.length < 20) {
      this.students.push(student);
      console.log(`${student.fullName} enrolled in ${this.courseName}`);
    } else {
      console.log(`Sorry, ${this.courseName} is full.`);
    }
  }
}

class TrainingCenter {
  courses: Course[] = [];

  searchCourse(courseName: string): Course | undefined {
    return this.courses.find((course) => course.courseName === courseName);
  }

  findStudentCourses(studentName: string): Course[] {
    const studentCourses: Course[] = [];
    this.courses.forEach((course) => {
      if (course.students.some((student) => student.fullName === studentName)) {
        studentCourses.push(course);
      }
    });
    return studentCourses;
  }

  getUnfinishedCourses(): Course[] {
    const currentDate = new Date();
    return this.courses.filter((course) => course.startDate < currentDate);
  }

  getNotStartedCourses(): Course[] {
    const currentDate = new Date();
    return this.courses.filter((course) => course.startDate > currentDate);
  }
}

// Hàm main để thực hiện theo nhu cầu của người quản lý
function main() {
  const center = new TrainingCenter();

  const course1 = new Course(
    "Web Development",
    new Date("2024-02-01"),
    "3 months"
  );
  const course2 = new Course(
    "Data Science",
    new Date("2024-03-15"),
    "4 months"
  );

  center.courses.push(course1, course2);

  const student1 = new Student2("John Doe", "123 Main St", "555-1234");
  const student2 = new Student2("Jane Doe", "456 Oak St", "555-5678");

  course1.enrollStudent(student1);
  course2.enrollStudent(student2);

  console.log("Courses:");
  center.courses.forEach((course) => {
    console.log(`Course: ${course.courseName}`);
    console.log(`Start Date: ${course.startDate}`);
    console.log(`Duration: ${course.duration}`);
    console.log("Students:");
    course.students.forEach((student) => {
      console.log(` - ${student.fullName} (${student.phoneNumber})`);
    });
    console.log("-----------");
  });

  const searchResult = center.searchCourse("Web Development");
  if (searchResult) {
    console.log("Found course:", searchResult);
  } else {
    console.log("Course not found.");
  }

  const student1Courses = center.findStudentCourses("John Doe");
  console.log("Courses of John Doe:", student1Courses);

  const unfinishedCourses = center.getUnfinishedCourses();
  console.log("Unfinished courses:", unfinishedCourses);

  const notStartedCourses = center.getNotStartedCourses();
  console.log("Not started courses:", notStartedCourses);
}

// Gọi hàm main để chạy chương trình
main();

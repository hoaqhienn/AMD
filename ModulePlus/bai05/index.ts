/**
 * Represents a student with their full name, birth year, and grades.
 */
class Student {
    fullName: string;
    birthYear: number;
    grades: number[];

    /**
     * Creates a new instance of the Student class.
     * @param fullName - The full name of the student.
     * @param birthYear - The birth year of the student.
     * @param grades - An array of grades for the student.
     */
    constructor(fullName: string, birthYear: number, grades: number[]) {
        this.fullName = fullName;
        this.birthYear = birthYear;
        this.grades = grades;
    }

    /**
     * Checks if the student has completed their thesis.
     * @returns True if the student has completed their thesis, false otherwise.
     */
    isThesisCompleted(): boolean {
        return (
            this.grades.every((grade) => grade >= 5) &&
            this.grades.length === 5 &&
            this.calculateAverageGrade() > 7
        );
    }

    /**
     * Checks if the student has graduated.
     * @returns True if the student has graduated, false otherwise.
     */
    isGraduated(): boolean {
        return (
            this.calculateAverageGrade() <= 7 &&
            this.grades.every((grade) => grade >= 5)
        );
    }

    /**
     * Checks if the student needs to retake an exam.
     * @returns True if the student needs to retake an exam, false otherwise.
     */
    isRetakingExam(): boolean {
        return this.grades.some((grade) => grade < 5);
    }

    /**
     * Gets the subjects that the student needs to retake.
     * @returns An array of subjects that the student needs to retake.
     */
    getSubjectsToRetake(): string[] {
        const subjectsToRetake: string[] = [];
        this.grades.forEach((grade, index) => {
            if (grade < 5) {
                switch (index) {
                    case 0:
                        subjectsToRetake.push("Subject 1");
                        break;
                    case 1:
                        subjectsToRetake.push("Subject 2");
                        break;
                    case 2:
                        subjectsToRetake.push("Subject 3");
                        break;
                    case 3:
                        subjectsToRetake.push("Subject 4");
                        break;
                    case 4:
                        subjectsToRetake.push("Subject 5");
                        break;
                }
            }
        });
        return subjectsToRetake;
    }

    /**
     * Calculates the average grade of the student.
     * @returns The average grade of the student.
     */
    calculateAverageGrade(): number {
        const sum = this.grades.reduce((total, grade) => total + grade, 0);
        return sum / this.grades.length;
    }
}

const classList: Student[] = [
    new Student("Nguyen Van A", 2000, [8, 7, 9, 6, 8]),
    new Student("Nguyen Thi B", 2001, [6, 5, 7, 6, 4]),
    new Student("Tran Van C", 2002, [7, 7, 4, 4, 7]),
    new Student("Le D", 2002, [7, 7, 7, 7, 7]),
];

const studentsWithCompletedThesis = classList.filter((student) =>
    student.isThesisCompleted()
).length;
const graduatedStudents = classList.filter((student) =>
    student.isGraduated()
).length;
const studentsRetakingExams = classList.filter((student) =>
    student.isRetakingExam()
).length;

console.log("Số học viên được làm luận văn:", studentsWithCompletedThesis);
console.log("Số học viên tốt nghiệp:", graduatedStudents);
console.log("Số học viên phải thi lại:", studentsRetakingExams);

classList.forEach((student) => {
    if (student.isRetakingExam()) {
        const subjectsToRetake = student.getSubjectsToRetake();
        console.log(
            `- ${student.fullName} cần thi lại môn: ${subjectsToRetake.join(", ")}`
        );
    }
});

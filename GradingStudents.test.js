import gradingStudents from "./GradingStudents";

it ('renders correctly', () => {
    expect(gradingStudents([73, 67, 33, 38])).toBe([75, 67, 33, 40])
})
// 成绩等级分为A、B和C三级
function getGrade(score){
    if(score < 60) return 'C';
    if(score < 80) return 'B';
    return 'A';
}
// 学⽣及其成绩
let students = [
    {name: '张三', score: 84},
    {name: '李四', score: 58},
    {name: '王五', score: 99},
    {name: '赵六', score: 69}
];

function groupBy(students){
    if (!Array.isArray(students)) return null;
    return students.reduce((total, student) => {
        const grade = getGrade(student.score);
        total[grade] = total[grade] || [];
        total[grade].push(student);
        return total;
    }, {})
}


/**
 * 测试
 * @type {null}
 */
const group = groupBy(students);
console.log(group);

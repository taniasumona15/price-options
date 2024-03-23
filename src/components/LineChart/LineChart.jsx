import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {

    const studentData = [
        {
          id: 1,
          name: "Alice",
          math_marks: 85,
          physics_marks: 78,
          chemistry_marks: 90
        },
        {
          id: 2,
          name: "Bob",
          math_marks: 78,
          physics_marks: 85,
          chemistry_marks: 75
        },
        {
          id: 3,
          name: "Charlie",
          math_marks: 92,
          physics_marks: 88,
          chemistry_marks: 92
        },
        {
          id: 4,
          name: "David",
          math_marks: 65,
          physics_marks: 72,
          chemistry_marks: 68
        },
        {
          id: 5,
          name: "Eva",
          math_marks: 80,
          physics_marks: 75,
          chemistry_marks: 85
        },
        {
          id: 6,
          name: "Frank",
          math_marks: 75,
          physics_marks: 70,
          chemistry_marks: 78
        },
        {
          id: 7,
          name: "Grace",
          math_marks: 88,
          physics_marks: 90,
          chemistry_marks: 87
        },
        {
          id: 8,
          name: "Hannah",
          math_marks: 70,
          physics_marks: 68,
          chemistry_marks: 72
        },
        {
          id: 9,
          name: "Ian",
          math_marks: 82,
          physics_marks: 85,
          chemistry_marks: 80
        },
        {
          id: 10,
          name: "Julia",
          math_marks: 90,
          physics_marks: 92,
          chemistry_marks: 88
        }
      ];
      
      

    return (
        <div className='mt-10'>
            <LChart width={900} height={300} data={studentData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
            <Line dataKey="math_marks" stroke="red"></Line>
                <Line dataKey="physics_marks" stroke="blue"></Line>
                <Line dataKey="chemistry_marks" stroke="green"></Line>

            </LChart>
        </div>
    );
};

export default LineChart;
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#2A4759', '#096B68', '#522546', '#E9762B', '#DC143C', '#00BFFF', '#FF1493', '#7FFF00', '#8B4513', '#00CED1', '#FF4500', '#2F4F4F', '#D2691E', '#FF69B4', '#ADFF2F', '#B0C4DE'];
const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const BarCharts = ({ bookedItems }) => {
    // const [bookedItems, setBookedItems] = useState(null);
    // useEffect(() => {
    //     fetch('http://localhost:3000/bookedItems')
    //         .then(res => res.json())
    //         .then(data => {
    //             setBookedItems(data);
    //             console.log(data);
    //         })
    // }, []);
    return (
        <div className='bg-[#EFEFEF] pt-8 px-40 pb-[100px]'>
            <section className='flex justify-center bg-white rounded-2xl p-12'>
                <BarChart
                    width={1920}
                    height={600}
                    data={bookedItems}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="fee" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {bookedItems?.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </section>
        </div>
    );
};

export default BarCharts;
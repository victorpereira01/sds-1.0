import React, { useEffect, useState } from 'react';
import Filters from '../../components/Filters';
import Chart from 'react-apexcharts';

import { barOptions, pieOptions } from './chart-options';
import api from '../../services/api';
import { buildBarSeries, getPlatformChartData, getGenderChartData } from './helpers';

import './styles.css';

type PieChartData = {
    labels: string[];
    series: number[];
}

type BarChartData = {
    x: string;
    y: number;
}

const initialPieData = {
    labels: [],
    series: []
}

const Charts = () => {

    const [barChartData, setBarChartData] = useState<BarChartData[]>([]);
    const [platformData, setPlatformData] = useState<PieChartData>(initialPieData);
    const [genderData, setGenderData] = useState<PieChartData>(initialPieData);

    useEffect(() => {
        async function getData() {
            const records = await api.get('/records');
            const games = await api.get('/games');

            const barData = buildBarSeries(games.data, records.data.content);
            setBarChartData(barData);

            const platformChartData = getPlatformChartData(records.data.content);
            setPlatformData(platformChartData);

            const genderChartData = getGenderChartData(records.data.content);
            setGenderData(genderChartData);
        }
        getData();
    }, []);

    return (
        <div className="page-container">
            <Filters link="/records" linkText="VER TABELA" />
            <div className="chart-container">
                <div className="top-related">
                    <h1 className="top-related-title">JOGOS MAIS VOTADOS</h1>
                    <div className="games-container">
                        <Chart
                            options={barOptions}
                            type="bar"
                            width="900"
                            height="650"
                            series={[{ data: barChartData }]}
                        />
                    </div>
                </div>
                <div className="charts">
                    <div className="platform-chart">
                        <h2 className="chart-title">PLATAFORMAS</h2>
                        <Chart
                            options={{ ...pieOptions, labels: platformData?.labels }}
                            type="donut"
                            series={platformData?.series}
                            width="350"
                        />
                    </div>
                    <div className="platform-chart">
                        <h2 className="chart-title">GÊNEROS</h2>
                        <Chart
                            options={{ ...pieOptions, labels: genderData?.labels }}
                            type="donut"
                            series={genderData?.series}
                            width="350"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Charts;
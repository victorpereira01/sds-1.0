import React from 'react';
import Filters from '../../components/Filters';
import Chart from 'react-apexcharts';

import { barOptions, pieOptions } from './chart-options';

import './styles.css';

const chartData = [
    {
        x: 'Victor',
        y: 10
    },
    {
        x: 'Victor',
        y: 10
    },
    {
        x: 'Victor',
        y: 10
    },
    {
        x: 'Victor',
        y: 10
    },

]

const Charts = () => {
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
                            height="150"
                            series={[{ data: chartData }]}
                        />
                    </div>
                </div>
                <div className="charts">
                    <div className="platform-chart">
                        <h2 className="chart-title">PLATAFORMAS</h2>
                        <Chart
                            options={{ ...pieOptions, labels: ['Victor', 'Pereira'] }}
                            type="donut"
                            series={[30, 70]}
                            width="350"
                        />
                    </div>
                    <div className="platform-chart">
                        <h2 className="chart-title">GÊNEROS</h2>
                        <Chart
                            options={{ ...pieOptions, labels: ['Victor', 'Pereira'] }}
                            type="donut"
                            series={[30, 70]}
                            width="350"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Charts;
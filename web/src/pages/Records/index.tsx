import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import { formatDate } from './helpers';
import { RecordsResponse } from './types';

import './styles.css';

const Records = () => {

    const [recordsResponse, setRecordsResponse] = useState<RecordsResponse>();

    useEffect(() => {
        api.get('/records?linesPerPage=12')
            .then(res => setRecordsResponse(res.data));
    }, [])


    return (
        <div className="page-container">
            <table className="records-table" cellPadding="0" cellSpacing="0">
                <thead>
                    <tr>
                        <th>INSTANTE</th>
                        <th>NOME</th>
                        <th>IDADE</th>
                        <th>PLATAFORMA</th>
                        <th>GÊNERO</th>
                        <th>TÍTULO DO GAME</th>
                    </tr>
                </thead>
                <tbody>
                    {recordsResponse?.content.map(record => (
                        <tr key={record.id}>
                            <td>{formatDate(record.moment)}</td>
                            <td>{record.name}</td>
                            <td>{record.age}</td>
                            <td className="text-secondary">{record.gamePlatform}</td>
                            <td>{record.genreName}</td>
                            <td className="text-primary">{record.gameTitle}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Records;
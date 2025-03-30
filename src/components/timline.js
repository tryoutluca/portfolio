import * as React from 'react';
import './timeline.css';
import bankcler from '../assets/img/bankcoop.png';
import unibern from '../assets/img/unibern.png';
import akbern from '../assets/img/akb.jpeg';
import bpk from '../assets/img/bpk.jpeg';
import youtility from '../assets/img/youtility.jpeg'

export default function CustomizedTimeline() {

    return (
        <><div className='timeline'>
            <div className='container-time left'>
                <img src={bankcler}/>
                <div className='text-box'>
                    <h2>Bank Cler AG</h2>
                    <small>2013 - 2018</small>
                    <p>Kaufmännische Lehre und 2 Jahre am Info-Desk</p>
                    <span className='right-container-arrow'></span>
                </div>
            </div>
            <div className='container-time right'>
                <img src={unibern}/>
                <div className='text-box'>
                    <h2>Universität Bern</h2>
                    <small>2018 - 2019</small>
                    <p>Sachbearbeiter Finanzsysteme, vor allem für die Schnittstelle Finanzen und Abrechnung</p>
                    <span className='left-container-arrow'></span>
                </div>
            </div>
            <div className='container-time left'>
                <img src={akbern} />
                <div className='text-box'>
                    <h2>Ausgleichkasse Kt. Bern</h2>
                    <small>2020 - 2023</small>
                    <p>Sachbearbeiter Erwerbsersatz Ordnung, Familienzulagen, Mutter- und Elternschaftsentschädigung</p>
                    <span className='right-container-arrow'></span>
                </div>
            </div>
            <div className='container-time right'>
                <img src={bpk} />    
                <div className='text-box'>
                    <h2>Bernische Pensionskasse</h2>
                    <small>2023 - 2024</small>
                    <p>Vorsorgeberater Risikoleistungen</p>
                    <span className='left-container-arrow'></span>
                </div>
            </div>
            <div className='container-time left'>
                <img src={youtility} />
                <div className='text-box'>
                    <h2>Youtility AG</h2>
                    <small>2024 - 2025</small>
                    <p>Consultant ERP</p>
                    <span className='right-container-arrow'></span>
                </div>
            </div>
            </div></>
    )
}
import React, { useEffect, useState } from 'react'

import Keyboard from '../../components/Keyboard';
import Header from '../../components/UI/Header';
import ProgressBar from '../../components/UI/ProgressBar';
import api from '../../services/api'


const Home: React.FC = (props) => {
  const [memoria, setMemoria] = useState(0)
  const [processador, setProcessador] = useState(0)
  // function commad(programa: string) {
  //   const findProcess = 'tasklist | findstr /I '+programa
  //   const cmd = 'taskkill /f /im '+programa
  //   execSync(cmd);   
  //  }

  // let process = async (procentagem: number, prog: any) => {
  //   const total = await si.mem().then(data => data.total)
  //   const usada = await si.mem().then(data => data.used)
  //   const free = await si.mem().then(data => data.free)
  //   const perc = ((usada/total)*100).toFixed(0)
  //   console.log(await perc)
  //   setValue(perc)
  //   return (perc)
    
  // }
  // let run = async ()=>{
  //   const prog = 'chrome.exe'
  //   const limitPorcetagem = 80
  //   console.log(await process(limitPorcetagem, prog))
      
  // }
 

  // useEffect(() => {
  //   run()
  //   const intervalId = setInterval(() => {  //assign interval to a variable to clear it.

  //   }, 5000)
  
  //   return () => clearInterval(intervalId);
  // }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      api.get('/parameters/status')
      .then(response => {
        setMemoria(response.data.menPorcentagem),
        setProcessador(response.data.processador)
      });
    }, 1000);
    //60000
    // console.log(JSON.stringify(value[0]))
    return () => clearInterval(interval);
  }, []);
  return (
    <>
    <Header title='Dashboard'/>
    <div className='select-none min-h-screen flex items-center justify-center bg-green-300 py-12 px-4 sm:px-6 lg:px-8'>
        <Keyboard />
          <ProgressBar value={memoria} text='Memoria' />
          <ProgressBar value={processador} text='Processador' />
       {/*  <ProgressBar value={value} /> */}
    </div>
    </>
  );
};

export default Home;

function getMen() {
  throw new Error('Function not implemented.');
}

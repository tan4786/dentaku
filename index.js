'use strict'
{
  const num_bth = document.querySelectorAll('.num_bth');
  
  const output_total = document.getElementById('output_total');
  let total = 0;
  let state = 'start';  
  let mode = 'integer_mode'; 
    const one_nine = document.querySelectorAll('.one_nine');
    one_nine.forEach(index => {     
      index.addEventListener('click', () => {
        if(state === 'start') {
          
          total = index.dataset.indexId;         
        }else if(state === 'finish') {
          
          reset();
          total = index.dataset.indexId;  
        }else if(state === 'calculation'||state === 'calBtn'){
          
          total += index.dataset.indexId;
        }     
        output_total.textContent = total;
        state = 'calculation'
      })   
    })
  const zero = document.getElementById('zero');
  zero.addEventListener('click', () => {

  if(state==='start'||state==='finish'||state==='calBtn'){
      if(output_total.textContent.slice(-1) === '0') {
        
        console.log('前の文字はゼロ');
        return;
      }
    }

    if(state==='start') {
      total = zero.dataset.indexId;  
    }else{
      total += zero.dataset.indexId;
    }      
    output_total.textContent = total;

  })   


  const point = document.getElementById('point');
  point.addEventListener('click', () => {
    console.log(point.dataset.indexId)
    if(mode === 'decimal_mode'){
      return; 
       }      
   
    if(state==='start'||state==='finish') {
      total = 0;
    }else if(state==='calBtn'){
      
      if(output_total.textContent.slice(-1)!=='0'){
        total += 0;
      }   
    }
    total += point.dataset.indexId;

    output_total.textContent = total;
    state = 'calculation'
    mode = 'decimal_mode'; 
  }) 

  
  const cal = document.querySelectorAll('.cal');
  cal.forEach(index => {     
    index.addEventListener('click', () => {
      if(state === 'start') {
        return;
      }else if(state === 'calculation'){
        total += index.dataset.indexId;
      }else if(state === 'finish'){
        
        total = output_total.textContent;
        total += index.dataset.indexId;
        output_total.textContent = 0
      }else if(state ==='calBtn') {
       
        total = total.slice(0, -1)
        total += index.dataset.indexId;
      }

      output_total.textContent = total;
      state = 'calBtn'
      mode ='integer_mode'
    })   
  })

  
  const equal_btn = document.getElementById('equal_btn');
  equal_btn.addEventListener('click',() =>{
    console.log(eval(total));
    output_total.textContent = eval(total);
    state = 'finish'
    mode ='integer_mode'
  });

  
  const clear = document.getElementById('clear')
  clear.addEventListener('click', () => {
    reset();
  })

 
  function reset() {
    total = 0; 
    output_total.textContent = 0;
    mode ='integer_mode'
  }

  
  const bs = document.getElementById('bs')
  bs.addEventListener('click', () => {
    console.log('BS')
    if(state ==="finish") {
      return;
    }else{

      total = output_total.textContent.slice(0, -1);
      output_total.textContent = total;
    }
  })

}

const BInfo = {
  bmi: {
    type: 'bmi',
    res: [
      {
        info: '体重过轻',
        msg: '...',
        process:30,
        color:'#e08c18'
      }, {
        info: '体重健康',
        msg: '...',
        process:50,
        color:'#37b043'
      }, {
        info: '体重超标',
        msg: '...',
        process:70,
        color:'#e08c18'
      }, {
        info: '严重超标',
        msg: '...',
        process:90,
        color:' #cc3300'
      }
    ]
  },
  bfr: {
    type: 'bfr',
    res: [
      {
        info: '很低',
        msg: '...',
        process:10,
        color:'#37b043'
      }, {
        info: '一般',
        msg: '...',
        process:50,
        color:'#0073e6'
      }, {
        info: '很高',
        msg: '...',
        process:90,
        color:' #cc3300'
      }
    ]
  }
}
export const cal = (p_type: string, p_g: number, p_t: number, p_wt: number, p_a: number, p_wl: number) => {//计算公式；
  let type: string = p_type;//计算类型
  let g: number = p_g;//性别,男1；女0；  
  let t: number = p_t/100;//身高
  let wt: number = p_wt;//体重
  let a: number = p_a;//年龄
  let wl: number = p_wl;//腰围
  if (type === 'bmi') {
    let bmi: number = wt / (t * t);
    //console.log('bmi',bmi)
    let r_index = 0;
    if(bmi<=18.5){
      r_index=0;
    }else if(bmi<=23.9){
      r_index=1;
    }else if(bmi<=27.9){
      r_index=2;
    }else{
      r_index=3;
    }
    return {
      res:BInfo.bmi.res[r_index].info,
      msg:BInfo.bmi.res[r_index].msg,
      value:bmi.toFixed(2),
      process:BInfo.bmi.res[r_index].process,
      color:BInfo.bmi.res[r_index].color
    };
  } else if (type === 'bmr') {
    let bmr: number = 0.0;
    if (g == 1) {
      bmr = (10 * wt) + (6.25 * t) - (5 * a) + 5
    }
    if (g == 0) {
      bmr = (10 * wt) + (6.25 * t) - (5 * a) - 161
    }
    //console.log('getAge:'+a)
    return{
      res:bmr.toFixed(2)+'Kcal',
      msg:'',
      value:bmr.toFixed(2)+'Kcal',
      process:60,
      color:'#37b043'
    };
    
  } else if (type === 'bfr') {
    //体脂率 = 1.2×BMI + 0.23×年龄 - 5.4 - 10.8×性别
    let bfr: number = 0.0;
    let t_bmi: number = wt / (t * t);
    if (wl == 0 || a < 16) {
      bfr = (1.2 * t_bmi) + (0.23 * a) - 5.4 - (10.8 * g)
    } else {
      let p1: number = 0.0;
      let p2: number = 0.0;
      if (g == 1) {
        p1 = wl * 0.74;
        p2 = wt * 0.082 + 44.74
        bfr = ((p1 - p2) / wt) * 100
      } else {
        p1 = wl * 0.74;
        p2 = wt * 0.082 + 34.89;
        bfr = ((p1 - p2) / wt) * 100
      }
    }
    let b_index = 0
    if(bfr<=15){
      b_index=0;
    }else if(bfr<=30){
      b_index=1;
    }else{
      b_index=2;
    }
    return {
      res:BInfo.bfr.res[b_index].info,
      msg:BInfo.bfr.res[b_index].msg,
      value:bfr.toFixed(2)+'%',
      process:BInfo.bfr.res[b_index].process,
      color:BInfo.bfr.res[b_index].color
    };
    
  } else {
    return -1;
  }
}
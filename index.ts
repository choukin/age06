// import {chromium, devices} from 'playwright'
import {exportXlsx,datas} from './exportFile'
import {getKindergarten, dynamicFn} from './api'
import {omit,values} from 'lodash'
// const ora = require('ora');
// import ora from 'ora'

// const spinner = ora('数据获取中...').start();
interface district{
  code:number;
  name:string;
}
const districtcodeArray:district[] = [
{code:310115, name:'浦东新区'},
{code:310101, name:'黄浦区'},
{code:310106,name:'静安区'},
{code:310104,name:'徐汇区'},
{code:310105,name:'长宁区'},
{code:310107,name:'普陀区'},
{code:310109,name:'虹口区'},
{code:310110,name:'杨浦区'},
{code:310113,name:'宝山区'},
{code:310112,name:'闵行区'},
{code:310114,name:'嘉定区'},
{code:310116,name:'金山区'},
{code:310117,name:'松江区'},
{code:310118,name:'青浦区'},
{code:310226,name:'奉贤区'},
{code:310230,name:'崇明区'}
]

console.log(JSON.stringify(districtcodeArray));


const types:number[] = [1,2,3] 



/**
 * 生成获取数组
 * @returns 
 */
function generateGetsFn(){
  const featchFns:any[] = []
  for (const type of types) {
    for (const district of districtcodeArray) {
      featchFns.push(dynamicFn(district.code, type))
    }
  }
  return featchFns;
}

/**
 * 执行代码
 */
async function  processDatas(){

  const fns = generateGetsFn()
  const length = fns.length
  let count = 0
  
  for (const fetchPromise of fns) {
    count++
    
    const data = await fetchPromise()
    const models = data.data.result.models
    // console.log(models);
    
    formatData(models)
    // spinner.color = 'yellow'
	  // spinner.text = `${count}/${lenth}`
    console.log(`进度${count}/${length}`);
    if(count===length){
      console.log(`🚀 🌟 🎉 恭喜你成功获取数据`);
      
    }
    
    
  }
  // console.log(datas,'幼儿园');
  exportXlsx('学前机构', datas )
}

function formatData(models:any){
  for (const iterator of models) {
    for (const sub of iterator.gardens) {
      const targetitem = omit({
        ...iterator,
        gardenName:sub.name,
        gardenAddr:sub.address,
        gardenPhone:sub.phone,
      },['gardens','bbsId','code','organizationCode','deptmentId', 'ipsApplicationId','id','homePageUrl'
    ])
      datas.push(values(targetitem))
    }
  }
}

processDatas()


                                        

// (async ()=>{
//   const browser = await chromium.launch();
//   const page = await browser.newPage();
//   await page.goto('http://www.age06.com/Age06Web3/Home/SearchList?channel=home&sch=&type=0#')
//   page.on('load',(data)=>{
//     console.log(data,'data');
    
//   })
// })
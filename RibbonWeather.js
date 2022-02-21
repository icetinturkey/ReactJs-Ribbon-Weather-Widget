import React from 'react';

class RibbonWeather extends React.Component {
    state={
        hideNav:true,hideHum:true,card1Width:'110px',card2Width:'110px',card3Width:'110px',mainPartWidth:'400px',cityName:'null',
        day0CondImg:'01d',day0CondText:'null',day0Temp:'0',day0Date:'null',day0SmallDate:'null',day0maxTemp:'0',day0minTemp:'0',day0Wind:'0',day0Humid:'0',
        day1CondImg:'01d',day1CondText:'null',day1Temp:'0',day1Date:'null',day1SmallDate:'null',day1maxTemp:'0',day1minTemp:'0',day1Wind:'0',day1Humid:'0',
        day2CondImg:'01d',day2CondText:'null',day2Temp:'0',day2Date:'null',day2SmallDate:'null',day2maxTemp:'0',day2minTemp:'0',day2Wind:'0',day2Humid:'0',
        day3CondImg:'01d',day3CondText:'null',day3Temp:'0',day3Date:'null',day3SmallDate:'null',day3maxTemp:'0',day3minTemp:'0',day3Wind:'0',day3Humid:'0'
    }
    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
        this.getCityName();
        this.getWeatherData();
    }
    getCityName() {
        var xhr2 = new XMLHttpRequest()
        xhr2.addEventListener('load', () => {
            var sonuc = JSON.parse(xhr2.responseText);
            console.log(xhr2.responseText);
            const newCityName = sonuc[0].name+','+sonuc[0].country;
            this.setState({cityName: newCityName});
        })
        xhr2.open('GET', "https://api.openweathermap.org/geo/1.0/reverse?lat="+this.props.latitude+"&lon="+this.props.longitude+"&appid="+this.props.owApiKey)
        xhr2.send()
    }

    getWeatherData() {
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var xhr = new XMLHttpRequest()
        xhr.addEventListener('load', () => {
            var sonuc = JSON.parse(xhr.responseText);
            this.setState({day0Temp: sonuc.daily[0].temp.day});
            this.setState({day0CondImg: sonuc.daily[0].weather[0].icon});
            this.setState({day0CondText: sonuc.daily[0].weather[0].main});
            var dateDay0 = new Date(sonuc.daily[0].dt * 1000);
            this.setState({day0Date: dateDay0.toLocaleDateString("en-US")});
            this.setState({day0maxTemp: sonuc.daily[0].temp.max+''});
            this.setState({day0minTemp: sonuc.daily[0].temp.min});
            this.setState({day0Humid: sonuc.daily[0].humidity});
            this.setState({day0Wind: sonuc.daily[0].wind_speed});

            this.setState({day1Temp: sonuc.daily[1].temp.day});
            this.setState({day1CondImg: sonuc.daily[1].weather[0].icon});
            this.setState({day1CondText: sonuc.daily[1].weather[0].main});
            var dateDay1 = new Date(sonuc.daily[1].dt * 1000);
            this.setState({day1maxTemp: sonuc.daily[1].temp.max+''});
            this.setState({day1minTemp: sonuc.daily[1].temp.min});
            this.setState({day1Humid: sonuc.daily[1].humidity});
            this.setState({day1Wind: sonuc.daily[1].wind_speed});
            this.setState({day1Date: dateDay1.toLocaleDateString("en-US",{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })});
            this.setState({day1SmallDate: dateDay1.getDate()+" "+monthNames[dateDay1.getMonth()]});

            this.setState({day2Temp: sonuc.daily[2].temp.day});
            this.setState({day2CondImg: sonuc.daily[2].weather[0].icon});
            this.setState({day2CondText: sonuc.daily[2].weather[0].main});
            var dateDay2 = new Date(sonuc.daily[2].dt * 1000);
            this.setState({day2maxTemp: sonuc.daily[2].temp.max+''});
            this.setState({day2minTemp: sonuc.daily[2].temp.min});
            this.setState({day2Humid: sonuc.daily[2].humidity});
            this.setState({day2Wind: sonuc.daily[2].wind_speed});
            this.setState({day2Date: dateDay2.toLocaleDateString("en-US",{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })});
            this.setState({day2SmallDate: dateDay2.getDate()+" "+monthNames[dateDay2.getMonth()]});

            this.setState({day3Temp: sonuc.daily[3].temp.day});
            this.setState({day3CondImg: sonuc.daily[3].weather[0].icon});
            this.setState({day3CondText: sonuc.daily[3].weather[0].main});
            var dateDay3 = new Date(sonuc.daily[3].dt * 1000);
            this.setState({day3maxTemp: sonuc.daily[3].temp.max+''});
            this.setState({day3minTemp: sonuc.daily[3].temp.min});
            this.setState({day3Humid: sonuc.daily[3].humidity});
            this.setState({day3Wind: sonuc.daily[3].wind_speed});
            this.setState({day3Date: dateDay3.toLocaleDateString("en-US",{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })});
            this.setState({day3SmallDate: dateDay3.getDate()+" "+monthNames[dateDay3.getMonth()]});
        })
        xhr.open('GET', "https://api.openweathermap.org/data/2.5/onecall?lat="+this.props.latitude+"&lon="+this.props.longitude+"&exclude=current,hourly,minutely,alerts&units=metric&appid="+this.props.owApiKey)
        xhr.send()
    }
    resize() {
        this.setState({hideNav: window.innerWidth >= 760});
        this.setState({hideHum: window.innerWidth >= 1240});
        if(window.innerWidth >= 1240)
        {
            this.setState({mainPartWidth: '640px'});
        }else{
            this.setState({mainPartWidth: '400px'});
        }
    }
    changeCard1Width = () => {
        if(this.state.card1Width==="110px"){
            this.setState({card1Width: '990px'});
            this.setState({card2Width: '110px'});
            this.setState({card3Width: '110px'});
        }
        else{this.setState({card1Width: '110px'});}
    }
    changeCard2Width = () => {
        if(this.state.card2Width==="110px"){
            this.setState({card2Width: '990px'});
            this.setState({card1Width: '110px'});
            this.setState({card3Width: '110px'});
        }
        else{this.setState({card2Width: '110px'});}
    }
    changeCard3Width = () => {
        if(this.state.card3Width==="110px"){
            this.setState({card3Width: '990px'});
            this.setState({card2Width: '110px'});
            this.setState({card1Width: '110px'});
        }
        else{this.setState({card3Width: '110px'});}
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.resize.bind(this));
    }

    render(){

        return(

            <div>
                <style>
                    {
                        `
                        .miniCards:hover{border-bottom: 1px solid aqua;margin-bottom: -1px;}
                        .locationIconCss{height:40px;width:29px;display:block;background-size:16px;background-position:right center;background-repeat:no-repeat;background-image: url('data:image/png;base64,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')}
                        .heatIconCss{height:40px;width:29px;display:block;background-size:12px;background-position:right center;background-repeat:no-repeat;background-image: url('data:image/png;base64,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')}
                        .humidIconCss{height:40px;width:29px;display:block;background-size:20px;background-position:right center;background-repeat:no-repeat;background-image: url('data:image/png;base64,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')}
                        .windIconCss{height:40px;width:29px;display:block;background-size:20px;background-position:right center;background-repeat:no-repeat;background-image: url('data:image/png;base64,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')}
                        `
                    }
                </style>
            <div style={{display:'flex',boxShadow: "0px 0px 10px 1px #000000",flexDirection:'row-reverse',flexWrap:'nowrap',width:'100%',height:'40px',background:'linear-gradient(0deg, rgba(35,106,164,1) 0%, rgba(0,212,255,1) 65%, rgba(212,239,255,1) 100%)'}}>
                {
                    this.state.hideNav ? (
                    <div className='miniCards' onClick={this.changeCard3Width} style={{cursor:'pointer',width: this.state.card3Width, height: '40px'}}>
                        {
                            this.state.card3Width==="110px" ? (
                                    <div style={{width:'100%',height:'40px',textAlign:'center'}}>
                                        <div style={{width:'100%',height:'25px'}}>
                                            <div style={{width:'65%',height:'25px',lineHeight:1.5,float:'left',color:'#4a4a4a'}}>{this.state.day3maxTemp.split('.')[0]}&deg;</div>
                                            <img style={{width:'35%',height:'25px',float:'left',backgroundColor:'#5a5a5a'}} alt='some value' src={'http://openweathermap.org/img/wn/'+this.state.day3CondImg+'@2x.png'} />
                                        </div>
                                        <div style={{width:'100%',height:'15px',lineHeight:1.4,fontSize:'10px',backgroundColor:'#5a5a5a',color:'#fff'}}>{this.state.day3SmallDate}</div>
                                    </div>
                                ) :
                                <div style={{width:'100%',height:'40px'}}>
                                    <div style={{width:'80%',height:'40px',float:'left'}}>
                                        <div style={{width:'100%',height:'23px',borderTop:'2px solid #5a5a5a',fontSize:'14px',lineHeight:1.6,color:'#5a5a5a'}}>
                                            <div style={{float:'left',textAlign:'left'}}>&nbsp;&nbsp;Max: {this.state.day3maxTemp}&deg;, Min: {this.state.day3minTemp}&deg;</div>
                                            {
                                                this.state.hideHum ? (
                                                    <div style={{float: 'left', textAlign: 'left'}}>, Humidity: {this.state.day3Humid}%, Wind: {this.state.day3Wind}</div>
                                                ) : null
                                            }
                                            <div style={{float:'right',textAlign:'right'}}>{this.state.day3CondText}&nbsp;&nbsp;</div>
                                        </div>
                                        <div style={{width:'100%',height:'15px',lineHeight:1.4,fontSize:'10px',backgroundColor:'#5a5a5a',color:'#fff',textAlign:'center'}}>{this.state.day3Date}</div>
                                    </div>
                                    <div style={{width:'20%',height:'34px',float:'left',borderBottom:'4px solid #5a5a5a',borderTop:'2px solid #5a5a5a'}}>
                                        <center><img style={{width:'40px',height:'40px',marginTop:'-4px'}} alt='some value' src={'http://openweathermap.org/img/wn/'+this.state.day3CondImg+'@2x.png'} /></center>
                                    </div>
                                </div>
                        }
                    </div>
                    ) : null
                }
                {
                    this.state.hideNav ? (
                            <div className='miniCards' onClick={this.changeCard2Width} style={{cursor:'pointer',width: this.state.card2Width, height: '40px'}}>
                                {
                                    this.state.card2Width==="110px" ? (
                                            <div style={{width:'100%',height:'40px',textAlign:'center'}}>
                                                <div style={{width:'100%',height:'25px'}}>
                                                    <div style={{width:'65%',height:'25px',lineHeight:1.5,float:'left',color:'#4a4a4a'}}>{this.state.day2maxTemp.split('.')[0]}&deg;</div>
                                                    <img style={{width:'35%',height:'25px',float:'left',backgroundColor:'#6a6a6a'}} alt='some value' src={'http://openweathermap.org/img/wn/'+this.state.day2CondImg+'@2x.png'} />
                                                </div>
                                                <div style={{width:'100%',height:'15px',lineHeight:1.4,fontSize:'10px',backgroundColor:'#6a6a6a',color:'#fff'}}>{this.state.day2SmallDate}</div>
                                            </div>
                                        ) :
                                        <div style={{width:'100%',height:'40px'}}>
                                            <div style={{width:'80%',height:'40px',float:'left'}}>
                                                <div style={{width:'100%',height:'23px',borderTop:'2px solid #6a6a6a',fontSize:'14px',lineHeight:1.6,color:'#5a5a5a'}}>
                                                    <div style={{float:'left',textAlign:'left'}}>&nbsp;&nbsp;Max: {this.state.day2maxTemp}&deg;, Min: {this.state.day2minTemp}&deg;</div>
                                                    {
                                                        this.state.hideHum ? (
                                                            <div style={{float: 'left', textAlign: 'left'}}>, Humidity: {this.state.day2Humid}%, Wind: {this.state.day2Wind}</div>
                                                        ) : null
                                                    }
                                                    <div style={{float:'right',textAlign:'right'}}>{this.state.day2CondText}&nbsp;&nbsp;</div>
                                                </div>
                                                <div style={{width:'100%',height:'15px',lineHeight:1.4,fontSize:'10px',backgroundColor:'#6a6a6a',color:'#fff',textAlign:'center'}}>{this.state.day2Date}</div>
                                            </div>
                                            <div style={{width:'20%',height:'34px',float:'left',borderBottom:'4px solid #6a6a6a',borderTop:'2px solid #6a6a6a'}}>
                                                <center><img style={{width:'40px',height:'40px',marginTop:'-4px'}} alt='some value' src={'http://openweathermap.org/img/wn/'+this.state.day2CondImg+'@2x.png'} /></center>
                                            </div>
                                        </div>
                                }
                            </div>
                    ) : null
                }
                {
                    this.state.hideNav ? (
                            <div className='miniCards' onClick={this.changeCard1Width} style={{cursor:'pointer',width: this.state.card1Width, height: '40px'}}>
                                {
                                    this.state.card1Width==="110px" ? (
                                        <div style={{width:'100%',height:'40px',textAlign:'center'}}>
                                            <div style={{width:'100%',height:'25px'}}>
                                                <div style={{width:'65%',height:'25px',lineHeight:1.5,float:'left',color:'#4a4a4a'}}>{this.state.day1maxTemp.split('.')[0]}&deg;</div>
                                                <img style={{width:'35%',height:'25px',float:'left',backgroundColor:'#7a7a7a'}} alt='some value' src={'http://openweathermap.org/img/wn/'+this.state.day1CondImg+'@2x.png'} />
                                            </div>
                                            <div style={{width:'100%',height:'15px',lineHeight:1.4,fontSize:'10px',backgroundColor:'#7a7a7a',color:'#fff'}}>{this.state.day1SmallDate}</div>
                                        </div>
                                    ) :
                                        <div style={{width:'100%',height:'40px'}}>
                                            <div style={{width:'80%',height:'40px',float:'left'}}>
                                            <div style={{width:'100%',height:'23px',borderTop:'2px solid #7a7a7a',fontSize:'14px',lineHeight:1.6,color:'#5a5a5a'}}>
                                                <div style={{float:'left',textAlign:'left'}}>&nbsp;&nbsp;Max: {this.state.day1maxTemp}&deg;, Min: {this.state.day1minTemp}&deg;</div>
                                                {
                                                    this.state.hideHum ? (
                                                        <div style={{float: 'left', textAlign: 'left'}}>, Humidity: {this.state.day1Humid}%, Wind: {this.state.day1Wind}</div>
                                                    ) : null
                                                }
                                                <div style={{float:'right',textAlign:'right'}}>{this.state.day1CondText}&nbsp;&nbsp;</div>
                                            </div>
                                            <div style={{width:'100%',height:'15px',lineHeight:1.4,fontSize:'10px',backgroundColor:'#7a7a7a',color:'#fff',textAlign:'center'}}>{this.state.day1Date}</div>
                                            </div>
                                            <div style={{width:'20%',height:'34px',float:'left',borderBottom:'4px solid #7a7a7a',borderTop:'2px solid #7a7a7a'}}>
                                                <center><img style={{width:'40px',height:'40px',marginTop:'-4px'}} alt='some value' src={'http://openweathermap.org/img/wn/'+this.state.day1CondImg+'@2x.png'} /></center>
                                            </div>
                                        </div>
                                }
                            </div>
                    ) : null
                }
                <div style={{height:'40px',flexBasis:'100%',borderRight:'4px solid #7a7a7a'}}>
                    <div style={{margin:'0 auto',width:this.state.mainPartWidth,height:'40px',color:'#4a4a4a'}}>
                        <div style={{float:'left',height:'40px',width:'40px'}}>
                            <img style={{width:'40px',height:'40px'}} alt='some value' src={'http://openweathermap.org/img/wn/'+this.state.day0CondImg+'@2x.png'} />
                        </div>
                        <div style={{float:'left',height:'40px',width:'119px',textAlign:'center',borderLeft:'1px solid #add6ff'}}>
                            <div style={{height:'25px',width:'120px',fontSize:'20px'}}>{this.state.day0Temp}&deg;</div>
                            <div style={{height:'15px',width:'120px',fontSize:'10px',marginTop:'-2px',color:'#fff'}}>{this.state.day0CondText}</div>
                        </div>
                        <div style={{float:'left',height:'40px',width:'119px',textAlign:'center',borderLeft:'1px solid #add6ff'}}>
                            <div style={{height:'40px',width:'29px',float:'left'}}>
                                <div className='locationIconCss'></div>
                            </div>
                            <div style={{height:'40px',width:'90px',float:'left'}}>
                            <div style={{height:'25px',width:'90px',fontSize:'10px',lineHeight:2}}>
                                {this.state.cityName}
                            </div>
                            <div style={{height:'15px',width:'90px',fontSize:'10px',marginTop:'-2px',color:'#fff'}}>{this.state.day0Date}</div>
                            </div>
                        </div>
                        <div style={{float:'left',height:'40px',width:'119px',textAlign:'center',borderLeft:'1px solid #add6ff'}}>
                            <div style={{height:'40px',width:'29px',float:'left'}}>
                                <div className='heatIconCss'></div>
                            </div>
                            <div style={{height:'40px',width:'90px',float:'left'}}>
                                <div style={{height:'25px',width:'90px',fontSize:'10px',lineHeight:2}}>
                                    Max: {this.state.day0maxTemp}&deg;
                                </div>
                                <div style={{height:'15px',width:'90px',fontSize:'10px',marginTop:'-2px',color:'#fff'}}>
                                    Min: {this.state.day0minTemp}&deg;
                                </div>
                            </div>
                        </div>
                        {
                        this.state.hideHum ? (
                        <div style={{float:'left',height:'40px',width:'119px',textAlign:'center',borderLeft:'1px solid #add6ff'}}>
                            <div style={{height:'40px',width:'29px',float:'left'}}>
                                <div className='windIconCss'></div>
                            </div>
                            <div style={{height:'40px',width:'90px',float:'left'}}>
                                <div style={{height:'25px',width:'90px',fontSize:'20px'}}>{this.state.day0Wind}</div>
                                <div style={{height:'15px',width:'90px',fontSize:'10px',marginTop:'-2px',color:'#fff'}}>Wind (km/h)</div>
                            </div>
                        </div>
                        ): null
                        }
                        {
                            this.state.hideHum ? (
                                <div style={{float:'left',height:'40px',width:'119px',textAlign:'center',borderLeft:'1px solid #add6ff'}}>
                                    <div style={{height:'40px',width:'29px',float:'left'}}>
                                        <div className='humidIconCss'></div>
                                    </div>
                                    <div style={{height:'40px',width:'90px',float:'left'}}>
                                        <div style={{height:'25px',width:'90px',fontSize:'20px'}}>{this.state.day0Humid}%</div>
                                        <div style={{height:'15px',width:'90px',fontSize:'10px',marginTop:'-2px',color:'#fff'}}>Humidity</div>
                                    </div>
                                </div>
                            ): null
                        }
                    </div>
                </div>
            </div>
            </div>
    );
    }
}
RibbonWeather.defaultProps = {
    number: "0"
}
export default RibbonWeather;
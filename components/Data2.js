
import {BarChart} from 'react-easy-chart';
import React, {Component} from 'react';
import {render} from 'react-dom';
import ChoicesRow from './ChoicesRow';

export default class Data extends Component {
  componentDidMount() {
    console.log('mounted');
    // this.update();
    // setInterval(this.update, 2000);
  }

    render() {
    const chartOptions = [];
    const choices = [];
    this.props.answers.forEach(function(answer, index) {
      let color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
      chartOptions.push({x: this.props.choices[index], y: this.props.counter[index], color: color})
      choices.push(<ChoicesRow
        key={index}
        choice={this.props.choices[index]}
        counter={this.props.counter[index]}
        answer={answer}
        color={color}
        />);
      }.bind(this));
      console.log("counter ",this.props.counter);
    return (
      <div className='data'>
        <h3>Question: {this.props.question}</h3>
         <BarChart
           axes
           colorBars
           margin={{top: 10, right: 0, bottom: 30, left: 100}}
           height={350}
           width={350}
           data={chartOptions}
         />
        <ul className='choiceList'>
          {choices}
        </ul>
      </div>
    )
  }
}


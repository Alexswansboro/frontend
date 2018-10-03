import React, { Component } from 'react'
// import moment from 'moment'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'

// import { formatDate, parseDate } from 'react-day-picker/moment'
// import api from './api'

class CreateCalendar extends Component {
  constructor () {
    super()
    this.state = {
      fromDate: undefined,
      fromHour: undefined,
      fromMinute: undefined,
      fromAmPm: undefined,
      toDate: undefined,
      toHour: undefined,
      toMinute: undefined,
      toAmPm: undefined,
      title: '',
      type: ''
    }
    this.handleFromDateChange = this.handleFromDateChange.bind(this)
  }
  // componentDidMount () {
  //   this.getCalendar(this.props.id)
  // }
  // getCalendar (id) {
  //   api.getCalendar(id)
  //     .then(calendar => {
  //       this.setState({ calendar })
  //     })
  // }
  handleFromDateChange (day) {
    this.setState({ fromDate: day })
    console.log(this.state.fromDate, 'day')
  }
  handleToDateChange (value) {
    this.setState({ toDate: value })
  }
  setFromHour (value) {
    this.setState({ fromHour: value })
    console.log(this.state, 'state in CreateCalendar')
  }
  setFromMinute (value) {
    this.setState({ fromMinute: value })
  }
  setFromAmPm (value) {
    this.setState({ fromAmPm: value })
  }
  setToHour (value) {
    this.setState({ toHour: value })
    console.log(this.state, 'state in CreateCalendar')
  }
  setToMinute (value) {
    this.setState({ toMinute: value })
  }
  setToAmPm (value) {
    this.setState({ toAmPm: value })
  }
  render () {
    // let { fromDate, toDate } = this.state
    // const modifiers = { start: from, end: to }
    return (<div >
      <label>Calendar Title
        <input className='input' type='text' placeholder='Provide calendar Title' />
      </label>
      <span className='datePicker'>
        <DayPickerInput onDayChange={(day) => this.handleFromDateChange(day)} />
      </span>
      <span className='datePicker'>
        <DayPickerInput onDayChange={(day) => this.handleToDateChange(day)} />
      </span>
      <div>Shift Times
        <div>
          <div>Start Time
            <select id='selector' placeholder='hours' onBlur={(e) => this.setFromHour(e.target.value)}>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
              <option value='11'>11</option>
              <option value='12'>12</option>
            </select>
            <select id='selector' placeholder='minutes' onBlur={(e) => this.setFromMinute(e.target.value)}>
              <option value='00'>00</option>
              <option value='15'>15</option>
              <option value='30'>30</option>
              <option value='45'>45</option>
            </select>
            <select id='selector' placeholder='AM/PM'onBlur={(e) => this.setFromAmPm(e.target.value)}>
              <option value='AM'>AM</option>
              <option value='PM'>PM</option>
            </select>
          </div>
          <div>Stop Time
            <select id='selector' placeholder='hours' onBlur={(e) => this.setToHour(e.target.value)}>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
              <option value='11'>11</option>
              <option value='12'>12</option>
            </select>
            <select id='selector' placeholder='minutes' onBlur={(e) => this.setToMinute(e.target.value)}>
              <option value='00'>00</option>
              <option value='15'>15</option>
              <option value='30'>30</option>
              <option value='45'>45</option>
            </select>
            <select id='selector' placeholder='AM/PM' onBlur={(e) => this.setToAmPm(e.target.value)}>
              <option value='AM'>AM</option>
              <option value='PM'>PM</option>
            </select>
          </div>
          Shift Number
        </div>
      </div>
    </div>)
  }
}
export default CreateCalendar

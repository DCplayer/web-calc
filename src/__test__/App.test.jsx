import React from 'react'
import { shallow } from '../enzyme'

import App from '../App.jsx'

describe('My first collection of test', () => {
	it('renders the add button',  () => {
		const wrapper = shallow(<App/>)
		expect(wrapper.find('button number').text()).toEqual('+')
	})
})

describe('My first collection of test', () => {
	it('renders the add button',  () => {
		const wrapper = shallow(<App/>)
		expect(wrapper.find('button').text()).toEqual('-')
	})
})

describe('My first collection of test', () => {
	it('renders the add button',  () => {
		const wrapper = shallow(<App/>)
		expect(wrapper.find('button').text()).toEqual('X')
	})
})

describe('My first collection of test', () => {
	it('renders the add button',  () => {
		const wrapper = shallow(<App/>)
		expect(wrapper.find('button').text()).toEqual('/')
	})
})

describe('My first collection of test', () => {
	it('renders the add button',  () => {
		const wrapper = shallow(<App/>)
		expect(wrapper.find('button').text()).toEqual('.')
	})
})
package com.Account
import grails.plugin.springsecurity.annotation.Secured
class SecureController {
@Secured('ROLE_ADMIN')
    def index() { 
    	render 'secure access only'
    			}
}

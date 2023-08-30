package com.ecommerce.response;

public class PaymentLinkResponse {
	
	private String payment_link_url;
	private String payment_link_id;
	
	public PaymentLinkResponse() {
		// TODO Auto-generated constructor stub
	}
	
	public PaymentLinkResponse(String payment_link_url, String payment_link_id) {
		super();
		this.payment_link_url = payment_link_url;
		this.payment_link_id = payment_link_id;
	}

	public String getPayment_link_url() {
		return payment_link_url;
	}

	public void setPayment_link_url(String payment_link_url) {
		this.payment_link_url = payment_link_url;
	}

	public String getPayment_link_id() {
		return payment_link_id;
	}

	public void setPayment_link_id(String payment_link_id) {
		this.payment_link_id = payment_link_id;
	}

}

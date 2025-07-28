package com.treding_backend.service;

import com.razorpay.RazorpayException;
import com.stripe.exception.StripeException;
import com.treding_backend.domain.PaymentMethod;
import com.treding_backend.model.PaymentOrder;
import com.treding_backend.model.User;
import com.treding_backend.response.PaymentResponse;

public interface PaymentService {

    PaymentOrder createOrder(User user, Long amount, PaymentMethod paymentMethod);

    PaymentOrder getPaymentOrderById(Long id) throws Exception;

    Boolean ProccedPaymentOrder (PaymentOrder paymentOrder,
                                 String paymentId) throws RazorpayException;

    PaymentResponse createRazorpayPaymentLink(User user,
                                              Long Amount,
                                              Long orderId) throws RazorpayException;

    PaymentResponse createStripePaymentLink(User user, Long Amount,
                                            Long orderId) throws StripeException;
}

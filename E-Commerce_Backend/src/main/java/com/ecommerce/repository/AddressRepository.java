package com.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.modal.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

}

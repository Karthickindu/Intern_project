import React, { useState, useEffect } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { VStack, Input, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "./ShippingForm.css";
import { toaster } from "./components/ui/toaster";

const validationSchema = Yup.object({
  callertype: Yup.string().required("Caller type is required"),
  accountno: Yup.string().required("Account number is required"),
  servicetype: Yup.string().required("Service type is required"),
  fulfillmentnode: Yup.string().required("Fulfillment node is required"),
  company: Yup.string().required("Company is required"),
  email: Yup.string().required("Email is required"),
  name: Yup.string().required("Name is required"),
  phone: Yup.string().required("Phone is required"),
  add1: Yup.string().required("Address 1 is required"),
  add2: Yup.string().required("Address 2 is required"),
  company_r: Yup.string().required("Company is required"),
  email_r: Yup.string().required("Email is required"),
  name_r: Yup.string().required("Name is required"),
  phone_r: Yup.string().required("Phone is required"),
  add1_r: Yup.string().required("Address 1 is required"),
  add2_r: Yup.string().required("Address 2 is required"),
});

const ShippingForm = () => {
  const navigate = useNavigate();
  const [callerTypes, setCallerTypes] = useState([]);
  const [accountNumbers, setAccountNumbers] = useState([]);
  const [serviceTypes, setServiceTypes] = useState([]);
  const [fulfillmentNodes, setFulfillmentNodes] = useState([]);
  const [senderAddress1, setSenderAddress1] = useState([]);
  const [senderAddress2, setSenderAddress2] = useState([]);
  const [recipientAddress1, setRecipientAddress1] = useState([]);
  const [recipientAddress2, setRecipientAddress2] = useState([]);

  const fetchCallerTypes = async () => {
    try {
      const response = await fetch("http://localhost:3001/callerTypes");
      const data = await response.json();
      //   console.log("*******data", data);
      setCallerTypes(data);
    } catch (error) {
      console.log("**********fetch error");
      console.error("Error fetching caller types:", error);
    }
  };

  const fetchAccountNumbers = async () => {
    try {
      const response = await fetch("http://localhost:3001/accountNumbers");
      const data = await response.json();
      setAccountNumbers(data);
    } catch (error) {
      console.error("Error fetching account number :", error);
    }
  };

  const fetchServiceTypes = async () => {
    try {
      const response = await fetch("http://localhost:3001/serviceTypes");
      const data = await response.json();
      console.log("Service Types:", data);
      setServiceTypes(data);
    } catch (error) {
      console.error("Error fetching service types:", error);
    }
  };

  const fetchFulfillmentNodes = async () => {
    try {
      const response = await fetch("http://localhost:3001/fulfillmentNodes");
      const data = await response.json();
      console.log("Fulfillment Nodes:", data);
      setFulfillmentNodes(data);
    } catch (error) {
      console.error("Error fetching fulfillment nodes:", error);
    }
  };

  const fetchSenderAddress1 = async () => {
    try {
      const response = await fetch("http://localhost:3001/senderAddress1");
      const data = await response.json();
      setSenderAddress1(data);
    } catch (error) {
      console.error("Error fetching senderAddress1:", error);
    }
  };

  const fetchSenderAddress2 = async () => {
    try {
      const response = await fetch("http://localhost:3001/senderAddress2");
      const data = await response.json();
      setSenderAddress2(data);
    } catch (error) {
      console.error("Error fetching senderAddress2:", error);
    }
  };

  const fetchRecipientAddress1 = async () => {
    try {
      const response = await fetch("http://localhost:3001/recipientAddress1");
      const data = await response.json();
      setRecipientAddress1(data);
    } catch (error) {
      console.error("Error fetching recipientAddress1:", error);
    }
  };

  const fetchRecipientAddress2 = async () => {
    try {
      const response = await fetch("http://localhost:3001/recipientAddress2");
      const data = await response.json();
      setRecipientAddress2(data);
    } catch (error) {
      console.error("Error fetching recipientAddress2:", error);
    }
  };

  useEffect(() => {
    fetchCallerTypes();
    fetchAccountNumbers();
    fetchServiceTypes();
    fetchFulfillmentNodes();
    fetchSenderAddress1();
    fetchSenderAddress2();
    fetchRecipientAddress1();
    fetchRecipientAddress2();
  }, []);

  const handleSubmit = (values) => {
    const isValid =
        values.callertype &&
        values.accountno &&
        values.servicetype &&
        values.fulfillmentnode &&
      values.name &&
      values.company &&
      values.email &&
      values.phone &&
        values.add1 &&
        values.add2 &&
      values.city &&
      values.state &&
      values.zip &&
      values.country &&
      values.name_r &&
      values.company_r &&
      values.email_r &&
      values.phone_r &&
        values.add1_r &&
        values.add2_r &&
      values.city_r &&
      values.state_r &&
      values.zip_r &&
      values.country_r &&
      values.weight &&
      values.dimension;
    if (isValid) {
      localStorage.setItem("shipping", JSON.stringify(values));
      toaster.create({
        description: "Data saved successfully",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      navigate("/display");
    }
  };

  return (
    <Formik
      initialValues={{
        callertype: "",
        accountno: "",
        servicetype: "",
        fulfillmentnode: "",
        name: "",
        company: "",
        email: "",
        phone: "",
        add1: "",
        add2: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        name_r: "",
        company_r: "",
        email_r: "",
        phone_r: "",
        add1_r: "",
        add2_r: "",
        city_r: "",
        state_r: "",
        zip_r: "",
        country_r: "",
        weight: "",
        dimension: "",
      }}
      validationSchema={validationSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={handleSubmit}
    >
      {({ errors, isValid }) => (
        <Form>
          <VStack spacing={4}>
            <div className="p-4 bg-gray-900 shadow-md pt-5 pl-10 pr-10 pb-5 mt-10 w-3/4 h-full text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <label htmlFor="callertype">
                    Caller Type <span style={{ color: "white" }}>*</span>
                  </label>

                  <Field name="callerType">
                    {({ field }) => (
                      <select
                        {...field}
                        id="callerType"
                        className="input-field w-full h-9 bg-transparent border border-gray-600 text-gray-500 focus:bg-transparent focus:border-grey-500 focus:outline-none  border border-gray-600 shadow-lg rounded-md"
                        style={{
                          backgroundColor: "transparent",
                        }}
                      >
                        {callerTypes.map((callerType) => (
                          <option id={callerType.id}>{callerType.type}</option>
                        ))}
                      </select>
                    )}
                  </Field>

                  {/* <Field name="callertype">
                    {({ field }) => (
                      <Input
                        {...field}
                        id="callertype"
                        className="input-field  border border-gray-600 shadow-lg rounded-md h-9"
                      />
                    )}
                  </Field> */}
                  {errors.callertype && (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {errors.callertype}
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="accountno">
                    Account No <span style={{ color: "white" }}>*</span>
                  </label>

                  <Field name="accountNumbers">
                    {({ field }) => (
                      <select
                        {...field}
                        id="accountNumbers"
                        className="input-field w-full h-9 bg-transparent border border-gray-600 text-gray-500 focus:bg-transparent focus:border-grey-500 focus:outline-none shadow-lg rounded-md"
                        style={{ backgroundColor: "transparent" }}
                      >
                        {accountNumbers.map((account) => (
                          <option key={account.id} value={account.accountNo}>
                            {account.accountNo}
                          </option>
                        ))}
                      </select>
                    )}
                  </Field>

                  {/* <Field name="accountno">
                    {({ field }) => (
                      <Input
                        {...field}
                        id="accountno"
                        className="input-field  border border-gray-600 shadow-lg rounded-md h-9"
                      />
                    )}
                  </Field> */}

                  {errors.accountno && (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {errors.accountno}
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="servicetype">
                    Service Type <span style={{ color: "white" }}>*</span>
                  </label>

                  <Field name="serviceType">
                    {({ field }) => (
                      <select
                        {...field}
                        id="serviceType"
                        className="input-field w-full h-9 bg-transparent border border-gray-600 text-gray-500 focus:bg-transparent focus:border-grey-500 focus:outline-none shadow-lg rounded-md"
                        style={{ backgroundColor: "transparent" }}
                      >
                        {serviceTypes.map((service) => (
                          <option key={service.id} value={service.type}>
                            {service.type}
                          </option>
                        ))}
                      </select>
                    )}
                  </Field>
                  {/* <Field name="servicetype">
                    {({ field }) => (
                      <Input
                        {...field}
                        id="servicetype"
                        className="input-field  border border-gray-600 shadow-lg rounded-md h-9"
                      />
                    )}
                  </Field> */}
                  {errors.servicetype && (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {errors.servicetype}
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="fulfillmentnode">
                    Fulfillment Node <span style={{ color: "white" }}>*</span>
                  </label>

                  <Field name="fulfillmentNode">
                    {({ field }) => (
                      <select
                        {...field}
                        id="fulfillmentNode"
                        className="input-field w-full h-9 bg-transparent border border-gray-600 text-gray-500 focus:bg-transparent focus:border-grey-500 focus:outline-none shadow-lg rounded-md"
                        style={{ backgroundColor: "transparent" }}
                      >
                        {fulfillmentNodes.map((node) => (
                          <option key={node.id} value={node.node}>
                            {node.node}
                          </option>
                        ))}
                      </select>
                    )}
                  </Field>
                  {/* <Field name="fulfillmentnode">
                    {({ field }) => (
                      <Input
                        {...field}
                        id="fullfillmentnode"
                        className="input-field  border border-gray-600 shadow-lg rounded-md h-9"
                      />
                    )}
                  </Field> */}
                  {errors.fulfillmentnode && (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {errors.fulfillmentnode}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h2 className="mb-2">From(Sender)</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-5">
                  <div>
                    <label htmlFor="name">
                      Name <span style={{ color: "white" }}>*</span>
                    </label>
                    <Field name="name">
                      {({ field }) => (
                        <Input
                          {...field}
                          id="name"
                          className="input-field border border-gray-600 shadow-lg rounded-md h-9"
                        />
                      )}
                    </Field>
                    {errors.name && (
                      <div style={{ color: "red", fontSize: "12px" }}>
                        {errors.name}
                      </div>
                    )}
                  </div>
                  <div>
                    <label htmlFor="company">
                      Company <span style={{ color: "white" }}>*</span>
                    </label>
                    <Field name="company">
                      {({ field }) => (
                        <Input
                          {...field}
                          id="company"
                          className="input-field border border-gray-600 shadow-lg rounded-md h-9"
                        />
                      )}
                    </Field>
                    {errors.company && (
                      <div style={{ color: "red", fontSize: "12px" }}>
                        {errors.company}
                      </div>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email">
                      Email <span style={{ color: "white" }}>*</span>
                    </label>
                    <Field name="email">
                      {({ field }) => (
                        <Input
                          {...field}
                          id="email"
                          className="input-field border border-gray-600 shadow-lg rounded-md h-9"
                        />
                      )}
                    </Field>
                    {errors.email && (
                      <div style={{ color: "red", fontSize: "12px" }}>
                        {errors.email}
                      </div>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone">
                      Phone <span style={{ color: "white" }}>*</span>
                    </label>
                    <Field name="phone">
                      {({ field }) => (
                        <Input
                          {...field}
                          id="phone"
                          // type="number"
                          className="input-field border border-gray-600 shadow-lg rounded-md h-9"
                        />
                      )}
                    </Field>
                    {errors.phone && (
                      <div style={{ color: "red", fontSize: "12px" }}>
                        {errors.phone}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex space-x-6 mb-5">
                  <div className="w-full">
                    <label htmlFor="add1">
                      Address 1 <span style={{ color: "white" }}>*</span>
                      <br></br>
                    </label>

                    <Field name="senderAddress1">
                      {({ field }) => (
                        <select
                          {...field}
                          id="senderAddress1"
                          className="input-field w-full h-9 bg-transparent border border-gray-600 text-gray-500 focus:bg-transparent focus:border-grey-500 focus:outline-none shadow-lg rounded-md"
                        >
                          {senderAddress1.map((address) => (
                            <option key={address.id} value={address.id}>
                              {address.address1}
                            </option>
                          ))}
                        </select>
                      )}
                    </Field>

                    {/* <Field name="add1">
                      {({ field }) => (
                        <select
                          {...field}
                          id="add1"
                          className="input-field w-full h-9 bg-transparent border border-gray-600 text-gray-500 focus:bg-transparent focus:border-grey-500 focus:outline-none  border border-gray-600 shadow-lg rounded-md"
                          style={{
                            backgroundColor: "transparent",
                          }}
                        >
                          <option value="address1">79 Hyatt PI,NY,US </option>
                          <option value="address2">Address 2</option>
                          <option value="address3">Address 3</option>
                        </select>
                      )}
                    </Field> */}
                    {errors.add1 && (
                      <div style={{ color: "red", fontSize: "12px" }}>
                        {errors.add1}
                      </div>
                    )}
                  </div>
                  <div className="w-full">
                    <label htmlFor="add2">
                      Address 2 <span style={{ color: "white" }}>*</span>
                      <br></br>
                    </label>

                    <Field name="senderAddress2">
                      {({ field }) => (
                        <select
                          {...field}
                          id="senderAddress2"
                          className="input-field w-full h-9 bg-transparent border border-gray-600 text-gray-500 focus:bg-transparent focus:border-grey-500 focus:outline-none shadow-lg rounded-md"
                        >
                          {senderAddress2.map((address) => (
                            <option key={address.id} value={address.id}>
                              {address.address2}
                            </option>
                          ))}
                        </select>
                      )}
                    </Field>

                    {/* <Field name="add2">
                      {({ field }) => (
                        <select
                          {...field}
                          id="add2"
                          className="input-field w-full h-9 bg-transparent border border-gray-600 text-gray-500 focus:bg-transparent focus:border-grey-500 focus:outline-none  border border-gray-600 shadow-lg rounded-md"
                          style={{
                            backgroundColor: "transparent",
                          }}
                        >
                          <option value="address1">79 Hyatt PI,NY,US</option>
                          <option value="address2">Address 2</option>
                          <option value="address3">Address 3</option>
                          Add more options as needed
                        </select>
                      )}
                    </Field> */}

                    {errors.add2 && (
                      <div style={{ color: "red", fontSize: "12px" }}>
                        {errors.add2}
                      </div>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <label htmlFor="city">City</label>
                    <Field name="city">
                      {({ field }) => (
                        <Input
                          {...field}
                          id="city"
                          className="input-field  border border-gray-600 shadow-lg rounded-md  h-9"
                        />
                      )}
                    </Field>
                  </div>

                  <div>
                    <label htmlFor="state">State</label>
                    <Field name="state">
                      {({ field }) => (
                        <Input
                          {...field}
                          id="state"
                          className="input-field  border border-gray-600 shadow-lg rounded-md  h-9"
                        />
                      )}
                    </Field>
                  </div>
                  <div>
                    <label htmlFor="zip">Zip</label>
                    <Field name="zip">
                      {({ field }) => (
                        <Input
                          {...field}
                          id="zip"
                          placeholder="10001"
                          className="input-field  border border-gray-600 shadow-lg rounded-md h-9"
                        />
                      )}
                    </Field>
                  </div>
                  <div>
                    <label htmlFor="country">Country</label>
                    <Field name="country">
                      {({ field }) => (
                        <Input
                          {...field}
                          id="country"
                          placeholder="United States"
                          className="input-field  border border-gray-600 shadow-lg rounded-md h-9"
                        />
                      )}
                    </Field>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="mb-3">To(Recipient)</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-5 ">
                  <div>
                    <label htmlFor="name_r">
                      Name <span style={{ color: "white" }}>*</span>
                    </label>
                    <Field name="name_r">
                      {({ field }) => (
                        <Input
                          {...field}
                          id="name_r"
                          className="input-field  border border-gray-600 shadow-lg rounded-md h-9"
                        />
                      )}
                    </Field>
                    {errors.name_r && (
                      <div style={{ color: "red", fontSize: "12px" }}>
                        {errors.name_r}
                      </div>
                    )}
                  </div>
                  <div>
                    <label htmlFor="company_r">
                      Company <span style={{ color: "white" }}>*</span>
                    </label>
                    <Field name="company_r">
                      {({ field }) => (
                        <Input
                          {...field}
                          id="company_r"
                          className="input-field  border border-gray-600 shadow-lg rounded-md h-9"
                        />
                      )}
                    </Field>
                    {errors.company_r && (
                      <div style={{ color: "red", fontSize: "12px" }}>
                        {errors.company_r}
                      </div>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email_r">
                      Email <span style={{ color: "white" }}>*</span>
                    </label>
                    <Field name="email_r">
                      {({ field }) => (
                        <Input
                          {...field}
                          id="email_r"
                          className="input-field  border border-gray-600 shadow-lg rounded-md h-9"
                        />
                      )}
                    </Field>
                    {errors.email_r && (
                      <div style={{ color: "red", fontSize: "12px" }}>
                        {errors.email_r}
                      </div>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone_r">
                      Phone <span style={{ color: "white" }}>*</span>
                    </label>
                    <Field name="phone_r">
                      {({ field }) => (
                        <Input
                          {...field}
                          id="phone_r"
                          type="number"
                          className="input-field  border border-gray-600 shadow-lg rounded-md h-9"
                        />
                      )}
                    </Field>
                    {errors.phone_r && (
                      <div style={{ color: "red", fontSize: "12px" }}>
                        {errors.phone_r}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex space-x-6">
                  <div className="w-full mb-5">
                    <label htmlFor="add1_r">
                      Address 1 <span style={{ color: "white" }}>*</span>
                      <br></br>
                    </label>

                    <Field name="recipientAddress1">
                      {({ field }) => (
                        <select
                          {...field}
                          id="recipientAddress1"
                          className="input-field w-full h-9 bg-transparent border border-gray-600 text-gray-500 focus:bg-transparent focus:border-grey-500 focus:outline-none shadow-lg rounded-md"
                        >
                          {recipientAddress1.map((address) => (
                            <option key={address.id} value={address.id}>
                              {address.address1}
                            </option>
                          ))}
                        </select>
                      )}
                    </Field>

                    {/* <Field name="add1_r">
                      {({ field }) => (
                        <select
                          {...field}
                          id="add1_r"
                          className="input-field w-full h-9 bg-transparent border border-gray-600 text-gray-500 focus:bg-transparent focus:border-grey-500 focus:outline-none  border border-gray-600 shadow-lg rounded-md"
                        >
                          <option value="address1">79 Hyatt PI,NY,US</option>
                          <option value="address2">Address 2</option>
                          <option value="address3">Address 3</option>
                          Add more options as needed
                        </select>
                      )}    
                    </Field> */}
                    {errors.add1_r && (
                      <div style={{ color: "red", fontSize: "12px" }}>
                        {errors.add1_r}
                      </div>
                    )}
                  </div>
                  <div className="w-full">
                    <label htmlFor="add2_r">
                      Address 2 <span style={{ color: "white" }}>*</span>
                      <br></br>
                    </label>

                    <Field name="recipientAddress2">
                      {({ field }) => (
                        <select
                          {...field}
                          id="recipientAddress2"
                          className="input-field w-full h-9 bg-transparent border border-gray-600 text-gray-500 focus:bg-transparent focus:border-grey-500 focus:outline-none shadow-lg rounded-md"
                        >
                          {recipientAddress2.map((address) => (
                            <option key={address.id} value={address.id}>
                              {address.address2}
                            </option>
                          ))}
                        </select>
                      )}
                    </Field>

                    {/* <Field name="add2_r">
                      {({ field }) => (
                        <select
                          {...field}
                          id="add2_r"
                          className="input-field w-full h-9 bg-transparent border border-gray-600 text-gray-500 focus:bg-transparent focus:border-grey-500 focus:outline-none  border border-gray-600 shadow-lg rounded-md"
                        >
                          <option value="address1">79 Hyatt PI,NY,US</option>
                          <option value="address2">Address 2</option>
                          <option value="address3">Address 3</option>
                        </select>
                      )}
                    </Field> */}
                    {errors.add2_r && (
                      <div style={{ color: "red", fontSize: "12px" }}>
                        {errors.add2_r}
                      </div>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <label htmlFor="city_r">City</label>
                    <Field name="city_r">
                      {({ field }) => (
                        <Input
                          {...field}
                          id="city_r"
                          placeholder="New York"
                          className="input-field  border border-gray-600 shadow-lg rounded-md h-9"
                        />
                      )}
                    </Field>
                  </div>

                  <div>
                    <label htmlFor="state_r">State</label>
                    <Field name="state_r">
                      {({ field }) => (
                        <Input
                          {...field}
                          id="state_r"
                          placeholder="New York"
                          className="input-field  border border-gray-600 shadow-lg rounded-md h-9"
                        />
                      )}
                    </Field>
                  </div>
                  <div>
                    <label htmlFor="zip_r">Zip</label>
                    <Field name="zip_r">
                      {({ field }) => (
                        <Input
                          {...field}
                          id="zip_r"
                          placeholder="1001"
                          className="input-field  border border-gray-600 shadow-lg rounded-md h-9"
                        />
                      )}
                    </Field>
                  </div>
                  <div>
                    <label htmlFor="country_r">Country</label>
                    <Field name="country_r">
                      {({ field }) => (
                        <Input
                          {...field}
                          id="country_r"
                          placeholder="United States"
                          className="input-field  border border-gray-600 shadow-lg rounded-md h-9"
                        />
                      )}
                    </Field>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <h2>Parcel Characteristics</h2>
                <br></br>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <label htmlFor="weight">
                      Weight
                      <br></br>
                    </label>
                    <div className="border border-gray-600 shadow-lg rounded-md">
                      <Field name="weight">
                        {({ field }) => (
                          <Input
                            {...field}
                            id="weight"
                            placeholder="2"
                            style={{ width: "25%", flex: 1, height: "36px" }}
                          />
                        )}
                      </Field>
                      <span className="ml-16">|</span>
                      <Field name="unit">
                        {({ field }) => (
                          <select
                            {...field}
                            id="unit"
                            className="bg-transparent  text-gray-500 mr-2.5 ml-1"
                          >
                            <option value="kg">Kg</option>
                            <option value="g">g</option>
                            <option value="lb">lb</option>
                            <option value="oz">oz</option>
                            {/* Add more units as needed */}
                          </select>
                        )}
                      </Field>
                    </div>
                  </div>
                  <div className="w-full">
                    <label htmlFor="dimension">
                      Dimension|L*W*H|
                      <br></br>
                    </label>
                    <div className="border border-gray-600 shadow-lg rounded-md">
                      <Field name="dimension">
                        {({ field }) => (
                          <Input
                            {...field}
                            id="dimension"
                            placeholder="L * W * H"
                            style={{ width: "50%", flex: 1, height: "36px" }}
                          />
                        )}
                      </Field>
                      <span className="ml-4">|</span>
                      <Field name="unit_d">
                        {({ field }) => (
                          <select
                            {...field}
                            id="unit_d"
                            className="bg-transparent  text-gray-500 mr-2.5 ml-1"
                          >
                            <option value="kg">inch</option>
                            <option value="g">cm</option>
                            <option value="lb">m</option>
                            <option value="oz">mm</option>
                            {/* Add more units as needed */}
                          </select>
                        )}
                      </Field>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <Button
                  type="submit"
                  colorScheme="blue"
                  className="next-button text-sm py-2 px-4"
                  width="auto"
                  disabled={!isValid}
                >
                  Next
                </Button>
              </div>
            </div>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};

export default ShippingForm;

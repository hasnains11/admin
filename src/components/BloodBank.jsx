import { useState } from "react";
import {
  getBloodBankByName,
  uploadLogo,
  uploadObject,
} from "../services.js/storageService";
import { toast } from "react-toastify";
const LabTest = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [formValues, setFormValues] = useState({
    bloodBankName: "",
    timing: "",
    latitude: "",
    longitude: "",
    // category: "",
    // testName: "",
    description: "",
    donor: "",
    acceptor: "",
    price: "",
    logo: "",
    quantity: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else if (Object.keys(errors).length === 0) {
      setFormErrors({});
      console.log("submitting");
      // form submission logic goes here
      console.log(formValues);
      const logo = e.target["logo"].files[0];
      try {
        setFormErrors({});
        setIsLoading(true);
        console.log("before logo submit");
        console.log(logo);
        const url = await uploadLogo(logo).then(async (url) => {
          const existingBloodBank = await getBloodBankByName(
            formValues.bloodBankName
          );
          console.log("existing   " + existingBloodBank);
          // console("exosting   "+existingBloodBank);
          if (existingBloodBank) {
            const bloodData = {
              bloodBankId: existingBloodBank.id,
              logo: url,
              name: existingBloodBank.name,
              donor: formValues.donor,
              acceptor: formValues.acceptor,
              price: formValues.price,
              quantity: formValues.quantity,
            };
            console.log(bloodData);
            const f = await uploadObject("bloodata", bloodData);
            setIsLoading(false);
            toast.success("Successfully added Blood Bank Data");
            e.target.reset();
            setFormValues({});
          } else {
            console.log("Entered else");
            formValues.logoUrl = url;
            const bloodBank = {
              name: formValues.bloodBankName,
              logo: formValues.logoUrl,
              timing: formValues.timing,
              latitude: formValues.latitude,
              longitude: formValues.longitude,
              // category: formValues.category,
              // testName: formValues.testName,
              description: formValues.description,
            };
            const docid = await uploadObject("bloodbank", bloodBank);
            const bloodData = {
              bloodBankId: docid,
              logo: formValues.logoUrl,
              name: formValues.bloodBankName,
              donor: formValues.donor,
              acceptor: formValues.acceptor,
              price: formValues.price,
              quantity: formValues.quantity,
            };
            const f = await uploadObject("bloodata", bloodData);

            //   formValues.logoUrl=url;
            //   const bloodBank= {
            //     name: formValues.bloodBankName,
            //     logo: formValues.logoUrl,
            //     timing: formValues.timing,
            //     latitude: formValues.latitude,
            //     longitude: formValues.longitude,
            //     category: formValues.category,
            //     testName: formValues.testName,
            //     description: formValues.description
            //   };

            //   const docid=await uploadObject('bloodbank',bloodBank);

            //   const bloodData = {
            //     bloodBankId: docid,
            //     logo: formValues.logoUrl,
            //     name: formValues.bloodBankName,
            //     donor: formValues.donor,
            //     acceptor: formValues.acceptor,
            //     price: formValues.price,
            //     quantity: formValues.quantity,
            //   };

            //   // const f=await uploadObject('bloodata',bloodData);
            setIsLoading(false);
            toast.success("Successfully added Blood Bank Data");
            e.target.reset();
            setFormValues({});
          }
        });
      } catch (err) {
        setIsLoading(false);
        setFormValues({});
        toast("Error in adding Blood Bank Data");
        console.log(err);
      }
    }
  };

  const validate = (values) => {
    let errors = {};
    if (!values.bloodBankName) {
      errors.bloodBankName = "Lab name is required";
    }
    if (!values.timing) {
      errors.timing = "Timing is required";
    }

    if (!values.latitude) {
      errors.latitude = "Latitude is required";
    } else if (
      !/^(-?[1-8]?\d(?:\.\d{1,18})?|90(?:\.0{1,18})?)$/.test(values.latitude)
    ) {
      errors.latitude = "Please enter a valid latitude(-90 to 90)";
    }

    // Validation for Longitude
    if (!values.longitude) {
      errors.longitude = "Longitude is required";
    } else if (
      !/^(-?(?:1[0-7]|[1-9])?\d(?:\.\d{1,18})?|180(?:\.0{1,18})?)$/.test(
        values.longitude
      )
    ) {
      errors.longitude = "Please enter a valid longitude(-180 to 180)";
    }
    // if (!values.category || values.category === "true") {
      // errors.category = "Category is required";
    // }
    // if (!values.testName) {
      // errors.testName = "Test name is required";
    // }
    if (!values.price) {
      errors.price = "Price is required";
    }
    if (!values.quantity) {
      errors.price = "Price is required";
    }

    if (!values.logo) {
      errors.logo = "Lab logo is required";
    }

    if (!values.donor) {
      errors.donor = "Donor name is required";
    }

    if (!values.acceptor) {
      errors.logo = "Acceptor name is required";
    }

    return errors;
  };

  console.log(formValues);
  console.log(formErrors);
  const blurredBgStyle = {
    // backgroundColor: '#cecece',
    // filter: 'blur(1px)',
    // WebkitFilter: 'blur(1px)',
    // position: 'fixed',

    height: "100vh",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: -999,
  };

  const spinnerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  };

  return (
    <div className="container my-3" style={blurredBgStyle}>
      {isLoading && (
        <div style={spinnerStyle}>
          <div
            className="spinner-border"
            style={{ width: "5rem", height: "5rem" }}
            role="status"
          ></div>
        </div>
      )}

      {!isLoading && (
        <>
          {" "}
          <h2 className="mb-3 text-center">Blood Donation Form </h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mt-1">
              <label htmlFor="lab-name">Blood Bank Name</label>
              <input
                type="text"
                className="form-control"
                id="bloodBankName"
                name="bloodBankName"
                length="100"
                // value={formValues.bloodBankName}
                onChange={handleChange}
                placeholder="Enter Name"
                required
              />
            </div>
            <div className="form-group mt-1">
              <label htmlFor="timing">Timing</label>
              <input
                type="time"
                className="form-control"
                id="timing"
                name="timing"
                onChange={handleChange}
                required
              />
            </div>

            <label className="mt-2">Blood Bank location</label>
            <div className="form-row d-flex mt-2">
              <div className="form-group col-md-3 me-3">
                <label htmlFor="latitude">Latitude</label>
                <input
                  type="text"
                  className="form-control"
                  id="latitude"
                  name="latitude"
                  // value={formValues.latitude}
                  onChange={handleChange}
                  placeholder="Enter latitude"
                  required
                />
              </div>

              <div className="form-group col-md-3">
                <label htmlFor="longitude">Longitude</label>
                <input
                  type="text"
                  className="form-control"
                  id="longitude"
                  name="longitude"
                  placeholder="Enter longitude"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            {formErrors.latitude && (
              <div className="alert alert-danger py-0 my-2 " role="alert">
                <small>{formErrors.latitude}</small>
              </div>
            )}

            {formErrors.longitude && (
              <div className="alert alert-danger py-0 my-2 " role="alert">
                <small>{formErrors.longitude}</small>
              </div>
            )}
            <div className="my-3">
              <label htmlFor="logo" className="form-label">
                Blood Bank Logo
              </label>
              <input
                type="file"
                className="form-control"
                id="logo"
                onChange={handleChange}
                name="logo"
                accept="image/*"
                required
              />
            </div>
            {formErrors.logo && (
              <div className="alert alert-danger py-0 my-2 " role="alert">
                <small>{formErrors.logo}</small>
              </div>
            )}

            {/* <div className="form-group mt-1">
              <label htmlFor="category">Category</label>
              <select
                name="category"
                onChange={handleChange}
                className="form-control"
                id="category"
                required
              >
                <option value={true}>Select category</option>
                <option value="liver">Liver</option>
                <option value="heart">Heart</option>
                <option value="kidney">Kidney</option>
              </select>
            </div> */}
            {/* <div className="form-group mt-1">
              <label htmlFor="test-name">Blood Bank Name</label>
              <input
                type="text"
                className="form-control"
                id="test-name"
                name="testName"
                onChange={handleChange}
                placeholder="Enter test name"
                required
              />
            </div> */}
            {/* {formErrors.testName && (
              <div className="alert alert-danger py-0 my-2 " role="alert">
                <small>{formErrors.testName}</small>
              </div>
            )} */}
            <div className="form-group mt-4">
              <div className="form-group mt-1">
                <label htmlFor="description">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  // value={formValues.description}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Enter test description"
                />
              </div>
              {formErrors.description && (
                <div className="alert alert-danger py-0 my-2 " role="alert">
                  <small>{formErrors.description}</small>
                </div>
              )}

              <div className="d-flex">
                <div className="form-group mt-1 ">
                  <label htmlFor="donorsname">Donor</label>
                  <input
                    type="text"
                    className="form-control"
                    id="donorsname"
                    name="donor"
                    length="100"
                    // value={formValues.bloodBankName}
                    onChange={handleChange}
                    placeholder="Enter Donor name"
                    required
                  />
                </div>
                <div className="form-group mt-1 ms-5">
                  <label htmlFor="acceptorsname">Acceptor</label>
                  <input
                    type="text"
                    className="form-control"
                    id="acceptorsname"
                    name="acceptor"
                    length="100"
                    // value={formValues.bloodBankName}
                    onChange={handleChange}
                    placeholder="Enter Acceptor's Name"
                    required
                  />
                </div>
              </div>
            </div>
            {formErrors.donor && (
              <div className="alert alert-danger py-0 my-2 " role="alert">
                <small>{formErrors.donor}</small>
              </div>
            )}
            {formErrors.acceptor && (
              <div className="alert alert-danger py-0 my-2 " role="alert">
                <small>{formErrors.acceptor}</small>
              </div>
            )}

            <div className="form-group mt-3">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                className="form-control"
                id="price"
                min={0}
                name="price"
                // value={formValues.price}
                onChange={handleChange}
                placeholder="Enter test price"
                required
              />
            </div>
            {formErrors.price && (
              <div className="alert alert-danger py-0 my-2 " role="alert">
                <small>{formErrors.price}</small>
              </div>
            )}
            <div className="form-group mt-3">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                className="form-control"
                id="quantity"
                min={0}
                name="quantity"
                // value={formValues.quantity}
                onChange={handleChange}
                placeholder="Enter Quantity"
                required
              />
            </div>
            {formErrors.quantity && (
              <div className="alert alert-danger py-0 my-2 " role="alert">
                <small>{formErrors.quantity}</small>
              </div>
            )}
            <div className="text-center">
              <button type="submit" className="btn btn-primary mt-2 ">
                Submit
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default LabTest;

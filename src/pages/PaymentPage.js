import React ,{useState} from "react";
import Header from "../component/HeaderT";
import Box from '@mui/material/Box';
import Summary from "../component/Summary";
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import { useDispatch } from "react-redux";
import { addLibraryData , clearTableData ,addPersonal} from '../redux/action';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import {FormControl, useFormControlContext } from '@mui/base/FormControl';
import { Input, inputClasses } from '@mui/base/Input';
import { styled } from '@mui/system';
import clsx from 'clsx';

function PaymentPage () {

  const [showAlert , setShowAlert] = useState(false);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleagree = ({}) => {
      setShowAlert(true);
      dispatch(clearTableData());
      setOpen(false);   
      setTimeout(() => {
      navigate('/');
      },2000)
    };


    const steps = ['Personal Information', 'Library Card Information', 'Summary & Confirmation'];
  
    const dispatch = useDispatch();
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});
  
    const totalSteps = () => {
      return steps.length;
    };
  
    const completedSteps = () => {
      return (Object.keys(completed).length 
      
    )
    };
  
    const isLastStep = () => {
      return activeStep === totalSteps() - 1;
    };
  
    const allStepsCompleted = () => {
      return completedSteps() === totalSteps();
    };
  
    const handleNext = () => {
      if(activeStep==0){
              setActiveStep((prevActiveStep) => prevActiveStep + 1);
              dispatch(addPersonal(PersonalData));
        }else if(activeStep==1){
              setActiveStep((prevActiveStep) => prevActiveStep +1)   
              dispatch(addLibraryData(LibraryData));
        }
      setCompleted({
        ...completed,
        [activeStep]: true,
      });
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleStep = (step) => () => {
      setActiveStep(step);
      
    };


    const handleReset = () => {
      setActiveStep(0);
      setCompleted({});
    };

// **************************************************************************************************
    const [PersonalData, setPersonalData] = useState({
       name: '',
       email: '',
       phone:''
    });
    const handleChangepersonal = (event) => {
      const { name, value } = event.target;
      setPersonalData({
        ...PersonalData,
        [name]: value
      });
    };

// **************************************************************************************************

    const handleChangeCard = (event) => {
      const { name, value } = event.target;
      setLibraryData({
        ...LibraryData,
        [name]: value
      })
    }
    const [LibraryData, setLibraryData] = useState({
      fullname: '',
      cardnumber: '',
    });

    return ( <>
    <Header/>
    <Box sx={{ width: '100%' , marginTop:5,padding:10 }}>
    {showAlert && (
    <Alert sx={{display:"flex", alignItems:"center",justifyContent:"center", marginBottom:10}} icon={<CheckIcon fontSize="inherit" />} severity="success">
      Your Order is confirm ,please return the book on time.
    </Alert>)}
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton  onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box marginTop={5}>
            {activeStep === 0 &&
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, maxWidth: 300, margin: 'auto' }}>
      <FormControl required>
        <Label htmlFor="name">Name</Label>
        <StyledInput
          id="name"
          name="name"
          value={PersonalData.name}
          onChange={handleChangepersonal}
          label="Name"
          placeholder="your name"
        />
        <HelperText/>
      </FormControl>

      <FormControl required>
        <Label htmlFor="email">Email</Label>
        <StyledInput
          id="email"
          name="email"
          value={PersonalData.email}
          onChange={handleChangepersonal}
          label="Email"
          placeholder="example@gmail.com"
        />
        <HelperText/>
      </FormControl>

      <FormControl required>
        <Label htmlFor="phone">Phone Number</Label>
        <StyledInput
          id="phone"
          name="phone"
          value={PersonalData.phone}
          onChange={handleChangepersonal}
          label="Phone"
          placeholder="+963-000-0000"
        />
        <HelperText/>
      </FormControl>
    </Box>}
                {activeStep === 1 &&       <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, maxWidth: 300, margin: 'auto' }}>
      <FormControl required>
        <Label htmlFor="fullname">Full Name</Label>
        <StyledInput
          id="fullname"
          name="fullname"
          value={LibraryData.fullname}
          onChange={handleChangeCard}
          label="fullname"
          placeholder="your full name"
        />
        <HelperText/>
      </FormControl>

      <FormControl required>
        <Label htmlFor="cardnumber">Card Number</Label>
        <StyledInput
          id="cardnumber"
          name="cardnumber"
          value={LibraryData.cardnumber}
          onChange={handleChangeCard}
          label="cardnumber"
          placeholder="000-000-0000"
        />
        <HelperText/>
      </FormControl>
    </Box>}
                {activeStep === 2 && <Summary />}
              </Box>

            
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={completedSteps() === totalSteps() - 1
                    ? handleClickOpen
                    : handleNext} sx={{ mr: 1 , color:'#814407' }}>
                {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Next'}
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' ,color:'#814407' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                 null
                ))}
            </Box>
          </React.Fragment>

        )}
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you want to confirm the books borrowing?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleagree} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>

      </div>
    </Box>


        </>
    )
}

export default PaymentPage;

const StyledInput = styled(Input)(
  ({ theme }) => `

  .${inputClasses.input} {
    width: 320px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      outline: 0;
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }
  }
`,
);

const Label = styled(({ children, className }) => {
  const formControlContext = useFormControlContext();
  const [dirty, setDirty] = React.useState(false);

  React.useEffect(() => {
    if (formControlContext?.filled) {
      setDirty(true);
    }
  }, [formControlContext]);

  if (formControlContext === undefined) {
    return <p>{children}</p>;
  }

  const { error, required, filled } = formControlContext;
  const showRequiredError = dirty && required && !filled;

  return (
    <p className={clsx(className, error || showRequiredError ? 'invalid' : '')}>
      {children}
      {required ? ' *' : ''}
    </p>
  );
})`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  margin-bottom: 4px;

  &.invalid {
    color: red;
  }
`;

const HelperText = styled((props) => {
  const formControlContext = useFormControlContext();
  const [dirty, setDirty] = React.useState(false);

  React.useEffect(() => {
    if (formControlContext?.filled) {
      setDirty(true);
    }
  }, [formControlContext]);

  if (formControlContext === undefined) {
    return null;
  }

  const { required, filled } = formControlContext;
  const showRequiredError = dirty && required && !filled;

  return showRequiredError ? <p {...props}>This field is required.</p> : null;
})`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
`;

const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};
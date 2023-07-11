import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";


function AddDateExpense({ AddDate }) {
  function setValue(value) {
    AddDate(value);
  }

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs} id="expenseDate">
        <DemoContainer
          components={["DateTimePicker"]}
          sx={{ width: "400px", marginLeft: "15px" }}
        >
          <DateTimePicker
            defaultValue={null}
            views={["year", "month", "day"]}
            onChange={(value) => setValue(value)}
          />
        </DemoContainer>
      </LocalizationProvider>
    </>
  );
}

export default AddDateExpense;

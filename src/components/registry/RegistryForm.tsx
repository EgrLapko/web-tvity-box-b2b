import React, { useEffect } from "react";
import {
  FormControlLabel,
  Grid,
  InputAdornment,
  MenuItem,
  Paper,
  Radio,
  TextField,
  Typography,
  RadioGroup,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DatePicker } from "@material-ui/pickers";
import { Field, Form, useFormikContext } from "formik";
import {
  FieldToRadioGroup,
  FieldToTextField,
} from "components/common/FormField";
import Button from "components/common/Button";
import StickyBottomContent from "components/common/StickyBottom/StickyBottomContent";
import withRegistryForm, { IValues } from "./withRegistryForm";

interface RegistryFormProps {
  onSubmit: (values: IValues) => void;
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5, 10),
    marginBottom: theme.spacing(13),
    boxShadow: "none",
    border: "1px solid #E8E8E8",
    borderRadius: 12,
  },
}));

const SelectProps = {
  displayEmpty: true,
};

const InputLabelProps = {
  shrink: true,
};

const RegistryForm: React.FC<RegistryFormProps> = () => {
  const classes = useStyles();

  const { values, setFieldValue }: any = useFormikContext();

  useEffect(() => {
    if (values.send_date_radio === "date_created") {
      setFieldValue("sendDate", `${new Date()}`);
    }
  }, [setFieldValue, values.send_date_radio]);

  return (
    <Form>
      <Paper className={classes.root}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography variant="subtitle2">Назва реєстру</Typography>
              </Grid>
              <Grid item xs={12}>
                <Field
                  placeholder="Введіть назву"
                  fullWidth
                  name="name"
                  variant="outlined"
                  component={FieldToTextField}
                  TextField={TextField}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography variant="subtitle2">
                  Посилання для замовника
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Field
                  fullWidth
                  name="link"
                  variant="outlined"
                  component={FieldToTextField}
                  TextField={TextField}
                  value="https://tviy.tech/b2b/1sad"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography variant="subtitle2">
                      Опис відправлення
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      placeholder="Введіть опис"
                      fullWidth
                      name="description"
                      variant="outlined"
                      component={FieldToTextField}
                      TextField={TextField}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography variant="subtitle2">
                      Оголошена вартість
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      fullWidth
                      name="price"
                      variant="outlined"
                      component={FieldToTextField}
                      TextField={TextField}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">грн</InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography variant="subtitle2">Вага</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      fullWidth
                      name="weight"
                      variant="outlined"
                      component={FieldToTextField}
                      TextField={TextField}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">кг</InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography variant="subtitle2">Довжина</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      fullWidth
                      name="length"
                      variant="outlined"
                      component={FieldToTextField}
                      TextField={TextField}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">см</InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography variant="subtitle2">Ширина</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      fullWidth
                      name="width"
                      variant="outlined"
                      component={FieldToTextField}
                      TextField={TextField}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">см</InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography variant="subtitle2">Висота</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      fullWidth
                      name="height"
                      variant="outlined"
                      component={FieldToTextField}
                      TextField={TextField}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">см</InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography variant="subtitle2">
                  Контакти відправника
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Field
                  label
                  fullWidth
                  variant="outlined"
                  name="senderContacts"
                  component={FieldToTextField}
                  TextField={TextField}
                  select
                  SelectProps={SelectProps}
                  InputLabelProps={InputLabelProps}
                >
                  <MenuItem>Лапко Єгор Олександрович</MenuItem>
                  <MenuItem>Гаврилюк Михайло Михайлович</MenuItem>
                  <MenuItem>Златопуп Оксан Валерйович</MenuItem>
                </Field>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography variant="subtitle2">Платник за доставку</Typography>
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="payer"
                  component={FieldToRadioGroup}
                  RadioGroup={RadioGroup}
                  row
                >
                  <FormControlLabel
                    label="Отримувач"
                    control={<Radio color="primary" value="receiver" />}
                  />
                  <FormControlLabel
                    label="Відправник"
                    control={<Radio color="primary" value="sender" />}
                  />
                  <FormControlLabel
                    label="Третя особа"
                    control={<Radio color="primary" value="third_party" />}
                  />
                </Field>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography variant="subtitle2">Форма оплати</Typography>
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="paymentForm"
                  component={FieldToRadioGroup}
                  RadioGroup={RadioGroup}
                  row
                >
                  <FormControlLabel
                    label="Готівка"
                    control={<Radio color="primary" value="cash" />}
                  />
                  <FormControlLabel
                    label="Безготівка"
                    control={<Radio color="primary" value="not_cash" />}
                  />
                </Field>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography variant="subtitle2">
                  Відділення відправки
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Field
                  label
                  fullWidth
                  variant="outlined"
                  name="sendLocation"
                  component={FieldToTextField}
                  TextField={TextField}
                  select
                  SelectProps={SelectProps}
                  InputLabelProps={InputLabelProps}
                >
                  <MenuItem>Лондон</MenuItem>
                  <MenuItem>Париж</MenuItem>
                  <MenuItem>Київа</MenuItem>
                </Field>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography variant="subtitle2">Одержувач</Typography>
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="receiver"
                  component={FieldToRadioGroup}
                  RadioGroup={RadioGroup}
                  row
                >
                  <FormControlLabel
                    checked
                    disabled
                    label="Приватна Особа"
                    control={<Radio color="primary" value="private_face" />}
                  />
                </Field>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography variant="subtitle2">Дата відправки</Typography>
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="send_date_radio"
                  component={FieldToRadioGroup}
                  RadioGroup={RadioGroup}
                  row
                >
                  <FormControlLabel
                    label="День створення накладної"
                    control={<Radio color="primary" value="date_created" />}
                  />
                  <FormControlLabel
                    label="Інша"
                    control={<Radio color="primary" value="other" />}
                  />
                </Field>
              </Grid>
              <Grid item xs={7}>
                <Field
                  component={DatePicker}
                  name="sendDate"
                  renderInput={(props: any) => <TextField {...props} />}
                  value={values.sendDate}
                  onChange={(date: any) => setFieldValue("sendDate", date)}
                  inputFormat="dd/MM/yyyy"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <StickyBottomContent position="fixed" justifyContent="center">
        <Grid container justifyContent="center" spacing={1}>
          <Grid item>
            <Button variant="contained" color="primary" type="submit">
              Зберегти дані
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" disabled>
              Згенерувати реєстр
            </Button>
          </Grid>
        </Grid>
      </StickyBottomContent>
    </Form>
  );
};

export default withRegistryForm(RegistryForm);

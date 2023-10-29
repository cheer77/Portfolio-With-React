import React from 'react';
import styled from 'styled-components';
import { myTheme } from '../../../../style/Theme.styled';
import { ac } from '../../../../utils/mixins';

export const Form = () => {
  return (
    <FormInner>
      <h2>Leave us your info</h2>
      <FormBox>
        <label>
          <p>Your Full Name ( Required)</p>
          <input type="text" required={true} />
        </label>
        <label>
          <p>Your Email ( Required)</p>
          <input type="email" required={true} />
        </label>
        <label>
          <p>Subject</p>
          <input type="text" />
        </label>
        <label>
          <p>Your Message</p>
          <textarea cols={12}></textarea>
        </label>

        <button type={'submit'}>send message</button>
      </FormBox>
    </FormInner>
  );
};

const FormInner = styled.div`
  max-width: 570px;
  width: 100%;
  h2 {
    font-size: ${ac('32px', '27px')};
    font-style: normal;
    font-weight: 700;
    line-height: 123.6%;
    text-transform: capitalize;
    color: ${myTheme.black};
    margin-bottom: 50px;
  }
`;

const FormBox = styled.form`
  background-color: #fff;
  padding: 25px 25px 34px;
  width: 100%;

  label,
  input,
  textarea {
    max-width: 100%;
    width: 100%;
  }

  input {
    min-height: 50px;
  }

  input,
  textarea {
    border: none;
    background-color: #f0f0f6;
    resize: none;
  }

  textarea {
    min-height: 210px;
  }

  label {
    display: inline-block;
    margin-bottom: 25px;
    p {
      font-size: 18px;
      font-weight: 500;
      line-height: 123.6%;
      text-transform: capitalize;
      margin-bottom: 8px;
    }
  }

  button {
    font-size: 14px;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    color: ${myTheme.black};
    background-color: ${myTheme.yellow};
    padding: 9px 24px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #fdc33a;
    }
  }
`;

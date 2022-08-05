import styled from "styled-components";

export const StyledForm = styled.div`
  form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
    line-height: 145%;
  }

  form h2 {
    margin: 10px 0;
    font-size: 20px;
  }

  .icon-container {
    background-color: pink;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon-main {
    color: black;
    width: 22px;
    height: 22px;
  }

  .user-creds {
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .user-creds input {
    display: block;
    width: 100%;
    font-size: 14px;
    font-weight: bold;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 3px;
    border: 1px solid transparent;
    background-color: ${({ theme }) => theme.$bkg};
    color: ${({ theme }) => theme.$colorPrimary};
  }

  .user-creds input:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.$colorPrimary};
    box-sizing: border-box;
  }

  .fullname {
    display: flex;
    justify-content: space-between;
  }

  .fullname > div {
    width: 48%;
  }

  .input-wrapper {
    border-radius: 3px;
    border: 1px solid ${({ theme }) => theme.$colorPrimary};
    margin-bottom: 20px;
  }

  .remember-container {
    display: flex;
    align-items: center;
    align-self: flex-start;
  }

  .remember_me {
    margin: 0 10px 0 0;
  }

  .sign-in-btn {
    display: block;
    margin: 20px 0 15px;
    width: 100%;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    height: 35px;
    background-color: ${({ theme }) => theme.$btnClr};
    color: ${({ theme }) => theme.$bkg};
  }

  .form-additional {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .form-link {
    color: ${({ theme }) => theme.$btnClr};
    text-decoration: none;
  }

  .reg-additional {
    margin-left: auto;
  }

  .form-copyright {
    margin-top: 60px;
  }
`;

import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'semantic-ui-react';
import './index.css';

export default function ErrorModal({ open, onClose }) {
  return (
    <Modal className="modal" open={open} onClose={onClose} size="mini" dimmer="inverted">
      <Modal.Header>ERROR!</Modal.Header>
      <Modal.Content>
        <Modal.Description>エラーが発生したためゲームを終了します。</Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={onClose} color="red">
          確認
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

ErrorModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

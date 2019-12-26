import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'semantic-ui-react';
import './index.css';

export default function ResultModal({ header, description, open, onClose, onContinue }) {
  return (
    <Modal className="modal" open={open} onClose={onClose} size="mini" dimmer="inverted">
      <Modal.Header>{header}</Modal.Header>
      <Modal.Content>
        <Modal.Description>{description}もう一回プレイしますか？</Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={onContinue} color="green">
          はい
        </Button>
        <Button onClick={onClose} color="red">
          いいえ
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

ResultModal.propTypes = {
  header: PropTypes.string,
  description: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onContinue: PropTypes.func,
};

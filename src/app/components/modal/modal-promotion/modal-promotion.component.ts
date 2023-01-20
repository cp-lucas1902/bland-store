import { Component } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-promotion',
  templateUrl: './modal-promotion.component.html',
  styleUrls: ['./modal-promotion.component.css']
})
export class ModalPromotionComponent {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
	}
	

	open(content: any) {
		this.modalService.open(content);
	}
  
}

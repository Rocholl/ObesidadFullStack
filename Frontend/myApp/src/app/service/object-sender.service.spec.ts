import { TestBed } from '@angular/core/testing';

import { ObjectSenderService } from './object-sender.service';


  describe("Object sender service", () => {
    let service: ObjectSenderService;
    beforeEach(() => {
      service = new ObjectSenderService();
    });
    it("prueba true objeto", () => {
      let result = service.getObjectSource();
  
      expect(typeof result ).toBe("object");
     
    });
    it("prueba false objeto", () => {
      let result = "fas";
  
       expect(typeof result ).toBe("object");
     
    });
    
  });
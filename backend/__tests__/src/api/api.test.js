const mongoose = require('mongoose');
const Mockgoose = require('mockgoose').Mockgoose;
const mockgoose = new Mockgoose(mongoose);

import Chores from '../../../src/models/chores.js';
import {server} from '../../../src/app.js';
import People from '../../../src/models/people.js';

const API_URL = '/api/v1/chores';

const mockRequest = require('supertest')(server);

describe('app module', () => {

  beforeAll((done) => {
    mockgoose.prepareStorage().then(() => {
      mongoose.connect('mongodb://localhost:27017/lab14db').then(() => {
        done();
      });
    });
  });

  afterEach((done) => {
    mockgoose.helper.reset().then(done);
  });

  it('should create a chore', () => {
    return Chores
      .create({
        chore: 'dishes',
        assignedTo: 'Lydia',
        completed: 'true',
      })
      .then(chore => {
        expect(chore.chore).toBe('dishes');
        expect(chore.assignedTo).toBe('Lydia');
      });
  });

  it('should get zilch via api', () => {
    return mockRequest
      .get(API_URL)
      .then(data => JSON.parse(data.text))
      .then(chores => {
        expect(chores).toEqual([]);
      });
  });

  it('should post new chore via API', () => {
    return mockRequest
      .post(API_URL)
      .send({
        chore: 'Laundry',
        assignedTo: 'Abigail',
        completed: 'true',
      })
      .then(data => JSON.parse(data.text))
      .then(chore => {

        expect(chore.assignedTo).toBe('Abigail');
        
        return mockRequest
          .get(API_URL)
          .then(data => JSON.parse(data.text))
          .then(chores => {
            expect(chores.length).toBe(1);
            expect(chores[0].assignedTo).toBe('Abigail');
          });
      });
  });

  it('should get 404', () => {
    let fail;
    return mockRequest.get('/foo/bar').then(res => {
      let err = JSON.stringify(res.text);
      expect(err).toBeDefined();
    }).catch(err => {
      fail(err);
    });
  });

  it('People, should make a person', () => {
    return People.create({Name:'Abigail', Age: 16})
      .then(person => {expect(person.Name).toBe('Abigail');
      });
  });

  it('should populate the person with their chores',() => {
    Chores.findOne({chore: 'dishes'})
      .populate('People', 'Name')
      .exec();  
  });
});
  it('should populate a person with their chores', async () => {
    const choreObj = {
      chore: 'feed dogs',
    };
const feedDogs = await Chores.create(choreObj);
expect(feedDogs.chore).toBe(choreObj.chore); 

const personObj = {
  Name: 'Liz',
  Age: 9,
  chore: feedDogs._id,
};

//const Liz = await People.create(personObj);

// const findLiz = await People
//   .findById(Liz._id)
//   .populate('Chores', 'chore')
//   .exec()
//   .then(findLiz => {expect(findLiz.Chores.chore).toBe(personObj.chore.id);
//   })
  })


// create a test that will ensure that your API returns a status code of 404 for routes that have not been registered
// create a series of tests to ensure that your /api/v1/resource-name endpoint responds as described for each condition below:
// GET good - test 200, returns a resource with a valid body
// GET - test 404, respond with 'not found' for valid requests made with an id that was not found
// PUT - test 200, returns a resource with an updated body
// PUT - test 400, responds with 'bad request' if no request body was provided
// PUT - test 404, responds with 'not found' for valid requests made with an id that was not found
// POST - test 400, responds with 'bad request' if no request body was provided
// POST - test 200, returns a resource for requests made with a valid body